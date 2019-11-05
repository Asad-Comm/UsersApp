import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import CardItem from './CardItem'
import { fetch_data } from '../Reducers/UserActions';



class ListUsers extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.users_list}
                    renderItem={({ item }) => {

                        console.log("each user", item)



                        return (
                            <CardItem>

                                <Text> Card 1  </Text>

                            </CardItem>
                        )
                    }
                    }
                />
            </View>

        )
    }
}

const mapStateToProps = (UserReducer) => {

    const { users_list } = UserReducer
    console.log('backing', users_list)

    return {
        users_list
    }
}

export default connect(mapStateToProps, { fetch_data })(ListUsers);