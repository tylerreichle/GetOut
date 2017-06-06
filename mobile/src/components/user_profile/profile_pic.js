var Image = require('Image');
var React = require('React');

class ProfilePicture extends React.Component {
  render() {
    const {userID} = this.props;
    const url = '';

    return (
      <Image
        source={{url}}
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }
}

export default ProfilePicture;