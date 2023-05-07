
1. step 1
====> create Project Expo 
npx create-expo-app my-app2

2. step2 
====> install webview with command react-native-webview
npx expo install react-native-webview


3. step 3
===> create webview in app.js

4. step 4 
=====> create pynecone project in assets
pc init

5. step5 
=====> export to static web html
sorry before pc export you must pc run 


pc export --frontend-only


6. step 6
====> create folder myapp and extract zip in myapp
unzip frontend.zip 


7. step 7
=======> install eas cli
npm install -g eas-cli


NOW BUILD TO APK 


8. step 8
====> login to eas
eas login
eas build:configure

9. step 9
====> create keystore and get keystore jks file
eas credentials

---------- YOU SENSITIVE KEYSTORE HERE
Sensitive Keystore information:
    Keystore password: 7794b94db342484e48c26fc727625c77
    Key alias:         0e4d8ae9566b412ff5361c884cd72a7a
    Key password:      a6e1af998de81c91b88af128096b95c0

    Path to Keystore:  @boysmith__my-app2.jks
    AND INPUT PASSWORD HERE a6e1af998de81c91b88af128096b95c0

10. step 10
===> build to android .aab
eas build --platform android

11. step 11
===>Download bundletool from internet and get short alias
alias bundletool='java -jar /home/mopt/Downloads/bundletool-all-1.14.1.jar '

12. step 12
======> convert .aab to .apks file with you data keystore
bundletool build-apks  --bundle=application-5ebd5757-aa56-486f-8bae-1cefcb486ae2.aab --output=dada.apks  --ks=myrelease.keystore --ks-pass=pass:7794b94db342484e48c26fc727625c77  --ks-key-alias=0e4d8ae9566b412ff5361c884cd72a7a --mode=universal
 

13. step 13
=======> rename youapp.apks to youapp.zip 
and extract zip file you can see apk file

14. finish you .. :)


NOW IF YOU CREATE SINGLE .apk 
you must add --mode=universal in bundletool



NOW I WANT INSTALL universal.apk to my android phone
