const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { dialogflow, Image } = require("actions-on-google");

const agent = dialogflow({
  debug: true,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("We are live");
});

agent.intent("Default Welcome Intent", (conv, data) => {
  //   console.log(conv);
  conv.ask("Hi {Patrick}, how is it going?");
  //   conv.ask(`Here's a picture of a cat`);
  //   conv.ask(
  //     new Image({
  //       url: "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg",
  //       alt: "A cat",
  //     })
  //   );

  //   conv.add('alright')
});

agent.intent("Get Strain", (conv, data) => {
    //   console.log(conv);
    conv.ask("Hi hi");
    //   conv.ask(`Here's a picture of a cat`);
    //   conv.ask(
    //     new Image({
    //       url: "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg",
    //       alt: "A cat",
    //     })
    //   );
  
    //   conv.add('alright')
  });
  
app.post("/fulfillment", agent);
app.post('/',(req,res)=>{

})

function getStrain(favouriteStrain){
    
}

//   const { message } = req.body;
//   if (!message) {
//     res.status(400).json({ error: "Should have a message" });
//   }

//   function testOne(agent) {
//     agent.add("response from webhook");
//   }
/*
    function supportPage(agent) {
        agent.requestSource  = 'ACTIONS_ON_GOOGLE';
       
        const urlContext1 = {
            name: 'openWebview',
            lifespan: 1,
            parameters: {
                hideBrowserTab: false,
                webViewTarget: 'self',
                webViewUrl: 'https://youngofficial.com/support'
            }
        };
        
        //agent.context.set(urlContext1);
        agent.setContext(urlContext1);
        
        
        const conv = agent.conv();
        conv.ask("Opening our Support Page!");
        conv.ask(new BasicCard({
            buttons: [new Button({
                title: 'Leave Message for Live Agents Here',
                url: 'https://youngofficial.com/support'
            })],
            title: 'Sorry I am still under training.  please click on this link to leave a message for one of our live agents.'
        }));
        conv.ask(
            new LinkOutSuggestion({
                name: 'Youngevity Corporate Directly (Phone Ordering and Customer Service)',
                url: 'https://shopdirect.youngevity.com/us_en/customer-care#contact-us/'
            })
        );
        agent.add(conv);
    }
*/

//   const intentMap = new Map();
//   //intentMap.set('share', supportPage);
//   intentMap.set("testing", testOne);
//   agent.handleRequest(intentMap);
// });
app.listen(PORT, () => console.log("server is running at port " + PORT));
