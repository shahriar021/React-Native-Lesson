import React from 'react'

import {View,SectionList,Text} from 'react-native'

const ForSectionList = () => {
  return (
    <View >
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text >{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text >{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  )
}

export default ForSectionList