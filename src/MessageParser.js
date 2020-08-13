// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage=message.toLowerCase();
        
        
        if(lowerCaseMessage.includes('hello') || 
        lowerCaseMessage.includes('hi') ||
        lowerCaseMessage.includes('Hi')){
            this.actionProvider.greet();
        }

        //fun
        if(lowerCaseMessage.includes('yo')) {
            this.actionProvider.greet1();
        }
        if(lowerCaseMessage.includes('ekkich') ||
            lowerCaseMessage.includes('Ekkich')) {
                this.actionProvider.greet2();
        }
        if(lowerCaseMessage.includes('#kiki')) {
            this.actionProvider.greet3();
        }
        if(lowerCaseMessage.includes('gaming') || lowerCaseMessage.includes('Gaming')) {
            this.actionProvider.handleGamingList();
        }

        //goodbye
        if(lowerCaseMessage.includes('bye') || 
            lowerCaseMessage.includes('goodbye') ||
            lowerCaseMessage.includes('peace')) {
            
                this.actionProvider.farewell();
                
        }
    }
  }
  
  export default MessageParser;