import React from 'react';
import { View, StyleSheet, Modal, FlatList, Text, Image } from 'react-native';
import { Input } from './input';
import { fetch_data, search_list , view_profile } from '../Reducers/UserActions';
import { connect } from 'react-redux';
import { Button } from './Button';
import Profile from './Profile';
import { CardItem } from './CardItem'
import ListUsers from './ListUsers';


class Home extends React.Component {

    state = {
        modalVisible: false,
        data: null
    }


    componentDidMount() {
        const url = 'https://api.github.com/users'
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(responseJson => {
                let data = responseJson
                this.setState({ data: responseJson })
                this.props.fetch_data(data)

            }
            )

    }


    render() {
        return (
            <View style={{ backgroundColor: '#add2c9', flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <Button onPress={() => this.props.fetch_data(this.state.data)}>
                        Refresh List
                    </Button>
                    <Input
                        placeholder='Search a name'

                        onChangeText={(text) => this.props.search_list(text.toLowerCase())}

                    />

                </View>
                <View style={{ flex: 5 }}>


                    {this.state.modalVisible ? <Profile
                        modal={this.state.modalVisible}
                    /> : null
                    }

                    <FlatList
                        data={this.props.users_list}
                        renderItem={(item) => {
                            let i = 0
                            console.log('alfla', item.item)
                            const { id, login, avatar_url, url } = item.item

                            return (
                                <View style={{ flex: 1 }}>
                                    <CardItem>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                style={{ height: 70, width: 70, borderRadius: 25 }}
                                                source={{ uri: avatar_url }}
                                            />
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={styles.id}>Id :{id} </Text>
                                                <Text style={styles.id}
                                                    onPress={() => {
                                                        fetch(url)
                                                        .then(response => response.json())
                                                        .then(responseJson => {
                                                            this.props.view_profile(responseJson)
                                                            console.log('Open Profile',responseJson)}
                                                        )
                                                        this.setState({ modalVisible: !this.state.modalVisible })
                                                    }}
                                                >{login} </Text>
                                            </View>
                                        </View>
                                    </CardItem>


                                </View>
                            )


                        }}

                    />


                </View>






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

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignSelf: "center"
    },
    id: {
        marginLeft: 10,
        fontSize: 24,
        alignSelf: 'flex-start'
    }
})

export default connect(mapStateToProps, { fetch_data, search_list , view_profile })(Home);