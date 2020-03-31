import React, { FC, memo, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from 'res/colors'

interface OptionProps {
  emoji: string
  label: string
  value: string
  extraInfo?: string
  onAction: (value: string) => void
  selected?: boolean
}

export const Option: FC<OptionProps> = memo(
  ({ emoji, label, onAction, value, selected, extraInfo }) => {
    const [isActive, setIsActive] = useState(false)

    const containerStyle = {
      ...styles.container,
      ...(selected || isActive ? styles.blueContainer : {}),
    }

    const labelStyle = {
      ...styles.label,
      ...(selected || isActive ? styles.whiteText : {}),
    }

    const extraInfoStyle = {
      ...styles.extraInfo,
      ...(selected || isActive ? styles.extraInfoActive : {}),
    }

    const handleOnPressInOrOut = () => setIsActive(!isActive)

    const handleOnPress = () => onAction(value)

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={handleOnPress}
        activeOpacity={1}
        onPressIn={handleOnPressInOrOut}
        onPressOut={handleOnPressInOrOut}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <View style={styles.texts}>
          <Text style={labelStyle}>{label}</Text>
          {extraInfo && <Text style={extraInfoStyle}>{extraInfo}</Text>}
        </View>
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.beigeDark,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 24,
    borderRadius: 8,
  },
  emoji: {
    fontSize: 26,
  },
  label: {
    fontSize: 14,
    color: colors.blueDark,
    fontWeight: '500',
  },
  texts: {
    marginLeft: 24,
  },
  extraInfo: {
    color: 'rgba(12,35,51,0.75)',
  },
  extraInfoActive: {
    color: 'rgba(255,255,255,0.75)',
  },
  whiteText: {
    color: 'white',
  },
  blueContainer: {
    backgroundColor: colors.blueDark,
  },
})
