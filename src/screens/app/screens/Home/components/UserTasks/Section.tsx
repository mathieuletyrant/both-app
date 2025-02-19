import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

import { colors } from 'res/colors'

interface SectionProps {
  title: string
}

export const Section: FC<SectionProps> = ({ title }) => (
  <Text style={styles.section}>{title}</Text>
)

const styles = StyleSheet.create({
  section: {
    fontSize: 14,
    color: colors.dark100,
    textTransform: 'capitalize',
    marginTop: 16,
    marginHorizontal: 24,
  },
})
