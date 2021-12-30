import sgMail, { MailDataRequired } from '@sendgrid/mail'

export const sgConfig = (key: string) => {
    sgMail.setApiKey(key)
}

// export const testMail = () => {
//     const msg: MailDataRequired = {
//         to: "yevexas279@saturdata.com",
//         from: "NRoolan731@gmail.com",
//         subject: "Test backend with SendGrid",
//         text: "Some text in the body",
//         html: "<h1>HTML atr</h1>"
//     }

//     sgMail.send(msg).then((response) => {
//         console.log(response[0].statusCode)
//         console.log(response[0].headers)
//     }).catch((error) => {
//         console.error(error)
//     })
// }