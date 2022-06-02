import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1
    },
    formContainer:{
        backgroundColor:Colors.white,
        borderRadius:5,
        alignSelf:'stretch',
        margin:10,
        minHeight:60,
        padding:20,
        alignItems:'center'
        
    },
    codeTitle:{
        fontWeight:'bold',
        marginTop:20
    },
    codeText:{
        fontWeight:'400'
    }

})

export default styles;