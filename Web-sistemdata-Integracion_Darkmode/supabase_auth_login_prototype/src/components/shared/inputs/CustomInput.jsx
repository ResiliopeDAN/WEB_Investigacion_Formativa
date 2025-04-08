import React from "react";
import PropTypes from "prop-types";
import {Box, Input, defineStyle, FieldErrorText, Field, InputGroup, Icon, Portal, Select} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import {Controller} from "react-hook-form";

export const AuthInput = ({
                                type,
                                register,
                                name,
                                errors,
                                label,
                                showPassword,
                                togglePasswordVisibility,
                            }) => {
    return (
        <Field.Root mb={3} invalid={!!errors[name]}>
            <Box pos="relative" w="full">
                <Input
                    type={type}
                    className="peer"
                    placeholder=""
                    size="lg"
                    bg="rgba(255, 255, 255, 0.08)"
                    border="1px solid rgba(39, 174, 96, 0.3)"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.700" }}
                    _hover={{
                        bg: "rgba(255, 255, 255, 0.12)",
                        borderColor: "rgba(39, 174, 96, 0.4)",
                    }}
                    _focus={{
                        bg: "rgba(255, 255, 255, 0.15)",
                        borderColor: "#2ECC71",
                        boxShadow: "0 0 0 1px #2ECC71",
                    }}
                    {...register(name)}
                />
                {togglePasswordVisibility && (
                    <Box
                        as="button"
                        type="button"
                        position="absolute"
                        right="3"
                        top="50%"
                        transform="translateY(-50%)"
                        color="whiteAlpha.700"
                        _hover={{ color: "white" }}
                        transition="color 0.2s"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </Box>
                )}
                <Field.Label css={floatingStyles}>{label}</Field.Label>
            </Box>
            <FieldErrorText color="#FF6B6B">{errors[name]?.message}</FieldErrorText>
        </Field.Root>
    );
}
AuthInput.propTypes = {
    type: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    showPassword: PropTypes.bool,
    togglePasswordVisibility: PropTypes.func,
};
const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "#001D4F",
    borderRadius: "md",
    px: "2",
    top: "-3",
    color: "white",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "all 0.2s",
    fontSize: "sm",
    _peerPlaceholderShown: {
        color: "whiteAlpha.700",
        top: "2.5",
        insetStart: "3",
        bg: "transparent"
    },
    _peerFocusVisible: {
        color: "#2ECC71",
        top: "-3",
        insetStart: "2",
        bg: "#001D4F",
        borderRadius: "md",
        px: "2",
        fontWeight: "normal"
    },
})

export const DashInput = ({
                              register,
                              name,
                              errors,
                              placeholder,
                              label,
                              icon,
                              type = "text",
                              control,
                              options,

}) => {
    if (type === "select"){
        return (
        <Field.Root invalid={!!errors[name]} width="full">
            <Field.Label fontWeight="normal" textStyle="sm">{label}</Field.Label>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Select.Root
                        name={field.name}
                        value={field.value}
                        onValueChange={({ value }) => field.onChange(value)}
                        onInteractOutside={() => field.onBlur()}
                        collection={options}>
                        <Select.HiddenSelect />
                        <Select.Control >
                            <Select.Trigger rounded="lg">
                                <Select.ValueText placeholder={placeholder} />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                                <Select.Indicator />
                            </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                            <Select.Positioner >
                                <Select.Content rounded="lg">
                                    {options.items.map((option) => (
                                        <Select.Item item={option} key={option.value} rounded="lg">
                                            {option.label}
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>
                )}
            />
            <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
        </Field.Root>)
    }
    return(
        <Field.Root invalid={!!errors[name]} w="full" >
            <Field.Label fontWeight="normal" textStyle="sm" >
                {label} <Field.RequiredIndicator/>
            </Field.Label>
            <InputGroup startElement={icon ? <Icon as={icon} variant="ghost" size="sm" /> : null}>
                <Input placeholder={placeholder} {...register(name)} rounded="lg"/>
            </InputGroup>
            <FieldErrorText color="#FF6B6B">{errors[name]?.message}</FieldErrorText>
        </Field.Root>
    )
};

DashInput.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    type: PropTypes.oneOf(["text", "select"]),
    control: PropTypes.object,
    options: PropTypes.object,

};

