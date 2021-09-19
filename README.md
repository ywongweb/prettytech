### How to run the app
`yarn` to install dependencies  
`cd ios && pod install` to install iOS Pods  
`yarn start` to start the packager  
In XCode, open the `PrettyTech.xcworkspace` project, select a simulator and run the app.

### How to run tests
`yarn test`

### Review notes
One of the task is to implement statement management. In a two screens demo like this we could have just use setState/hooks/Context with some prop-drilling to manage the state. However, in this test I opted for a full management solution(Redux) because this would be a more accurate representation of the kind of client side state management needed in most non-trivial app these days.
