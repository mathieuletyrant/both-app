import React, { FC, useState } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import { Icon, IconProps } from '../Icon'
import { Color, colors } from 'res/colors'

interface IconButtonProps extends IconProps {
  onAction: () => void
  buttonStyle?: any
  buttonColor?: Color
  iconStyle?: any
  iconColor?: Color
  size: 40 | 64
}

export const IconButton: FC<IconButtonProps> = ({ onAction, ...props }) => {
  const handleOnPress = () => onAction()

  const buttonStyle = {
    width: props.size,
    height: props.size,
    ...(props.buttonColor
      ? { backgroundColor: colors[props.buttonColor] }
      : {}),
    ...styles.button,
    ...props.buttonStyle,
  }

  const iconStyle = {
    ...(props.iconColor ? { color: colors[props.iconColor] } : {}),
    ...props.iconStyle,
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={handleOnPress}>
      <Icon style={iconStyle} width={30} height={30} {...props} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19.2,
  },
})
