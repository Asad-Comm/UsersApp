import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, Image , Linking} from 'react-native';
import { connect } from 'react-redux'
import { CardItem } from './CardItem';


class Profile extends React.Component {
    state = {
        modal: this.props.modalVisible
    }
    render() {
        return (
            <View >
                <Modal
                    ref={(r) => this.modal = r}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modal}
                    onRequestClose={() => {
                        this.setState({ modal: false })
                    }}>
                    
                        <CardItem>
                            <Image
                                source={{ uri: this.props.avatar_url }}
                                style={{ height: 200, width: 200, borderRadius: 18 }}
                            />
                        </CardItem>

                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}> {this.props.name}   {this.props.bio} </Text>
                        <Text style={{ marginTop :10 ,  fontSize: 20, fontWeight: 'bold' }}> Followers : {this.props.followers} </Text>
                        <Text style={{ marginTop  :10 ,  fontSize: 20, fontWeight: 'bold' }}> Following : {this.props.following} </Text>
                        <Text style={{ marginTop  :10 ,  fontSize: 20, fontWeight: 'bold' }}> Location: {this.props.location} </Text>
                        <Text style={{ marginTop  :10 ,  fontSize: 20, fontWeight: 'bold' }}> Public Repos: {this.props.public_repos} </Text>
                        <Text style={{ marginTop  :50 ,  fontSize: 20, fontWeight: 'bold' , alignSelf:'center' }}> Visit my Page: </Text>

                        <Text
                        onPress ={() => Linking.openURL(this.props.html_url) }
                        style={{ marginTop  :5 ,  fontSize: 20, fontWeight: 'bold' , color:'blue' , alignSelf:'center' }}> {this.props.html_url} </Text>


                  
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (UserReducer) => {

    const { user_profile } = UserReducer
    const { avatar_url, location, html_url, bio, public_repos, followers, following, name  } = user_profile
    // console.log('asdasasd',user_profile)

    return {
        user_profile
        , avatar_url, location, html_url, bio, public_repos, followers, following, name 
    }
}

export default connect(mapStateToProps)(Profile);

