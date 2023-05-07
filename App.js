import React, {useState} from 'react'
import {WebView} from 'react-native-webview'
import {ActivityIndicator,StyleSheet,Dimensions,View,SafeAreaView} from 'react-native'
import {useAssets} from 'expo-asset'

import {readAsStringAsync} from 'expo-file-system'

function App(){
  const [isLoading,setIsLoading] = useState(true)
  const [index,indexLoadingError] = useAssets(require("./assets/pyneapp/result/index.html"));
  const [html,setHtml] = useState("")

  if(index){
    readAsStringAsync(index[0].localUri).then((data)=>{
      setHtml(data)
    })
  }


  const webviewprops = {
    javaScriptEnabled :true,
    androidLayerType:"hardware",
    originWhitelist:["*"],
    allowFileAccess:true,
    domStorageEnabled:true,
    mixedContentMode:"always",
    allowUniversalAccessFromFileURLs:true,
    onLoad:()=>{
      setIsLoading(false)
    },
    source:{html},

    // AND DISABLE ZOOM IN PYNECONE
    scalesPageToFit:false
  }
  if(indexLoadingError){
    console.log(indexLoadingError)
  }

  // GET DEVICES SCREEN YOU PHONE
  const {height,width} = Dimensions.get("window")

  return (
    <SafeAreaView>
      <View style={{marginTop:30,height,width}}>
      {isLoading ? (
        <ActivityIndicator size="large"/>

        ):null}

      <View style={styles.webviewcontol}>
      <WebView {...webviewprops} style={{flex:1}}/>
      </View>


      </View>

    </SafeAreaView>

    )


}
const styles = StyleSheet.create({
  webview:{
    flex:1,
  },

webviewcontol:{
  flex:1,
  alignSelf:"stretch",
},
})

export default App;
