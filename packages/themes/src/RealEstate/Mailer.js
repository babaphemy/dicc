import 'isomorphic-fetch'
const url = "https://xtz05mugj7.execute-api.eu-west-1.amazonaws.com/dev/sendemail";
export async function sendMail(obj, type){
    const toSend = {from: "webmaster@myeverlasting.net", to: ["dabarcentre@gmail.com", "babaphemy@gmail.com"], title:type, cust: obj.firstName, message: `${obj.firstName} filled a ${type} on your website, here are the details:  ${JSON.stringify(obj)}`}
     const data = await fetch(`${url}`, {method: 'POST', headers: {Authorization: 'Basic bW9kZXNpcmU6bW9yYXlvMDQxNzIw'}, body: JSON.stringify(toSend)});
     window.alert('Thanks for submitting this form, a member of staff will contact you shortly')
     return data;
}