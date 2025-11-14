import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Voornaam Achternaam");
  const [title, setTitle] = useState("Developer");
  const [workdays, setWorkdays] = useState("ma-di-wo-do");
  const [email, setEmail] = useState("info@emico.nl");
  const [phone, setPhone] = useState("+31 85 888 77 44");
  const [address, setAddress] = useState("Utrechtsestraatweg 157, 3911 TS Rhenen");
  const [mobile, setMobile] = useState("06 1234 5678");

  const baseUrl = 'https://bastiaanjacobs.github.io/Emico/';
  const [copied, setCopied] = useState(false);
  const logoSrc = baseUrl+'logo.svg';

  const logoSize = '80';

  const mailWidth = '580px';
  const firstColWidth = '90px';
  const secondColWidth = '300px';
  const thirdColWidth = '190px';

  const mainColor = "#212121"; // Default Color
  const bgColor = "#fafafa"; // Background Color
  const accentColor = "#cfe0ff"; // Accent Color

  const copyToClipboard = (signatureHtml) => {
    navigator.clipboard.writeText(signatureHeader + "\n\n" + signatureHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [icons, setIcons] = useState({
    linkedin: true,
    whatsapp: true,
    x: false,
    facebook: false,
    instagram: false,
  });

  const toggleIcon = (name) => {
    setIcons((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const signatureHeader = `Mime-Version: 1.0
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: 8bit`

  const signatureHtml = `<html>
  <body>
    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12px; color: #111; background: #fff; width: ${mailWidth};">
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="vertical-align: middle; text-align: left; width: ${firstColWidth}; height: 80px; border-right: 1px solid #212121; padding-right: 10px; margin-right: 10px;">
                <img src="${baseUrl}logo-dark.png" alt="Emico Logo" height="15" width="80" style="width: 80px; height: 15px;"/>
              </td>
              <td style="vertical-align: top; padding: 0px 0px 0px 15px; width: ${secondColWidth};">
                <p style="margin: 0 0 3px 0; font-size: 18px; font-weight: bold; line-height: 1.2; color: #333;">${name}</p>
                <p style="margin: 0 0 5px 0;">
                  <span style="font-weight: 500; font-style: normal; color: #505050; font-size: 10px; letter-spacing: 0.5px; white-space: pre-wrap; text-transform: uppercase;">${title}</span>
                  <img height="10" width="9" src="${baseUrl}slash.png" alt="Slash Icon" style="margin-left: 2px; height: 10px; width: 9px;"/>
                </p>
              </td>
              <td style="width: ${thirdColWidth}; text-align: right; vertical-align: top; padding: 0px 0px 0px 15px;">
                <p style="padding-bottom: 3px; margin: 0;">
                  <span style="font-size: 8px; font-weight: 500; font-style: normal; color: rgb(96, 96, 96); letter-spacing: 0.5px; white-space: pre-wrap;">WEBSITE</span>
                  <a href="https://www.emico.nl" style="color: #333; font-size: 10px; text-decoration: none; font-weight: 600;"><img src="${baseUrl}slash-dark.png" alt="Dark Slash Icon" width="8" height="8" style="margin: 0 4px; font-size: 0; height: 8px; width: 8px;"/>www.emico.nl</a>
                </p>
                <p style="padding-bottom: 3px; margin: 0;">
                  <span style="font-size: 8px; font-weight: 500; font-style: normal; color: rgb(96, 96, 96); letter-spacing: 0.5px; white-space: pre-wrap;">PHONE</span>
                  <span style="color: #333; font-size: 10px; text-decoration: none; font-weight: 600;"><img src="${baseUrl}slash-dark.png" alt="Dark Slash Icon" width="8" height="8" style="margin: 0 4px; font-size: 0; height: 8px; width: 8px;"/>${phone}</span>
                </p>
                <p style="padding-bottom: 3px; margin: 0;">
                  <span style="font-size: 8px; font-weight: 500; font-style: normal; color: rgb(96, 96, 96); letter-spacing: 0.5px;">EMAIL</span>
                  <a href="mailto:${email}" style="color: #333; font-size: 10px; text-decoration: none; font-weight: 600;"><img src="${baseUrl}slash-dark.png" alt="Dark Slash Icon" width="8" height="8" style="margin: 0 4px; font-size: 0; height: 8px; width: 8px;"/>${email}</a>
                </p>
                <p style="padding: 0px; margin: 0;">
                 ${mobile ? `<span style="margin-left: 2px;">
                    <span style="font-size: 8px; font-weight: 500; font-style: normal; color: rgb(96, 96, 96); letter-spacing: 0.5px;">MOBILE: </span>
                    <span style="color: #333; font-size: 10px; text-decoration: none; font-weight: 600;"><img src="${baseUrl}slash-dark.png" alt="Dark Slash Icon" width="8" height="8" style="margin: 0 4px; font-size: 0; height: 8px; width: 8px;"/>${mobile}</span>
                  </span>` : ''}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
            <tr style="height: 40px;">
              <td style="vertical-align: middle; background: ${bgColor}; position: relative; height: 40px; width: ${firstColWidth}; border-right: 1px solid #212121;">
                <img src="${baseUrl}gptw-outline.png" alt="GPTW Logo" width="40" height="40" style="position: absolute; top: 0; left: 0; bottom: 0; width: 40px; height: 40px;"/>
              </td>
              <td style="vertical-align: middle; background: ${bgColor}; text-align: left; width: ${secondColWidth}; padding-left: 15px;">
                <p style="font-size: 10px; margin: 0;">
                  <img src="${baseUrl}address-icon.png" alt="Address Icon" width="12" height="12" style="width: 12px; height: 12px; margin-right: 5px;"/>
                  <span>${address}</span>
                </p>
              </td>
              <td style="padding-right: 10px; text-align: right; vertical-align: middle; background: ${bgColor}; width: ${thirdColWidth};">
                ${icons.linkedin ? `<a href="https://nl.linkedin.com/company/emico-e-commerce" style="display: inline-block; height: 20px; width: 20px; padding: 0px; margin-left: 5px; background-color: ${mainColor}; border-radius: 5px;"><img src="${baseUrl}linkedin-icon.png" alt="linkedin" height="2s" width="2n" style="height: 20px; width: 20px; font-size: 0;"/></a>` : ''}
                ${icons.whatsapp ? `<a href="https://wa.me/31858887744" style="display: inline-block; height: 20px; width: 20px; padding: 0px; margin-left: 5px; background-color: ${mainColor}; border-radius: 5px;"><img src="${baseUrl}whatsapp-icon.png" alt="whatsapp" height="2s" width="2n" style="height: 20px; width: 20px; font-size: 0;"/></a>` : ''}
                ${icons.x ? `<a href="https://www.x.com/" style="display: inline-block; height: 20px; width: 20px; padding: 0px; margin-left: 5px; background-color: ${mainColor}; border-radius: 5px;"><img src="${baseUrl}x-icon.png" alt="twitter" height="2s" width="2n" style="height: 20px; width: 20px; font-size: 0;"/></a>` : ''}
                ${icons.facebook ? `<a href="https://www.facebook.com/" style="display: inline-block; height: 20px; width: 20px; padding: 0px; margin-left: 5px; background-color: ${mainColor}; border-radius: 5px;"><img src="${baseUrl}facebook-icon.png" alt="facebook" height="2s" width="2n" style="height: 20px; width: 20px; font-size: 0;"/></a>` : ''}
                ${icons.instagram ? `<a href="https://www.instagram.com/" style="display: inline-block; height: 20px; width: 20px; padding: 0px; margin-left: 5px; background-color: ${mainColor}; border-radius: 5px;"><img src="${baseUrl}instagram-icon.png" alt="instagram" height="2s" width="2n" style="height: 20px; width: 20px; font-size: 0;"/></a>` : ''}
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
            <tr style="background: #fff;">
              <td style="background: #fff; text-align: right; padding-top: 10px;">
                <p style="color: #828282; font-size: 10px; padding: 0; margin: 0;">
                  ${workdays && `(Werkzaam op: ${workdays})`}
                  <a style="font-size: 10px; font-weight: 700; display: inline-block; border-radius: 5px; margin-left: 10px; padding: 5px 12px; background-color: ${accentColor}; text-decoration: none; color: #1155CB" title="https://www.emico.nl/vacatures/" data-auth="NotApplicable" rel="noopener noreferrer" target="_blank" href="https://www.emico.nl/vacatures/">We're hiring!</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return (
    <section className="mb-16">
      <div className="py-6 mb-8 md:mb-16 w-full border-b border-[#2a2a2a] hover:border-[#646cff]">
        <div className="container mx-auto px-4 max-w-5xl flex flex-row items-center justify-between relative">
          <img src={logoSrc} alt="Emico Logo" className="w-40 app-logo"/>
          <h1 className="text-2xl md:text-4xl font-medium text-[#757575]">SignatureApp</h1>
          <span className="flex flex-row gap-x-2 text-[8px] text-right py-2 px-3 bg-[#212121] border border-[#2a2a2a] hover:border-[#646cff] absolute -bottom-6 right-4 transform translate-y-1/2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <span>MailData Signatures</span>
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 my-8">
          <div className="w-full text-xs">
            <label htmlFor="name" className="text-xs block mb-2 font-bold">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>
          <div className="w-full text-xs">
            <label htmlFor="title" className="text-xs block mb-2 font-bold">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              autoComplete="organization-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>
          <div className="w-full text-xs">
            <label htmlFor="workdays" className="text-xs block mb-2 font-bold">
              Workdays
            </label>
            <input
              id="workdays"
              type="text"
              placeholder="Workdays"
              autoComplete="off"
              value={workdays}
              onChange={(e) => setWorkdays(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>
          <div className="w-full text-xs">
            <label htmlFor="email" className="text-xs block mb-2 font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>
          <div className="w-full text-xs">
            <label htmlFor="phone" className="text-xs block mb-2 font-bold">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>
          <div className="w-full text-xs">
            <label htmlFor="address" className="text-xs block mb-2 font-bold">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Address"
              autoComplete="street-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>
          <div className="w-full text-xs">
            <label htmlFor="mobile" className="text-xs block mb-2 font-bold">
              Mobile
            </label>
            <input
              id="mobile"
              type="text"
              placeholder="Mobile"
              autoComplete="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="p-3 w-full text-xs"
            />
          </div>

          <div className="w-full text-xs md:col-span-2">
            <label htmlFor="mobile" className="text-xs block mb-2 font-bold">
              Social icons
            </label>
            <div className="input p-3 flex flex-row flex-wrap gap-4 items-center">
              {Object.keys(icons).map((name) => (
                <label key={name} className="flex items-center">
                  <input
                    id={name.charAt(0).toUpperCase() + name.slice(1)}
                    type="checkbox"
                    checked={icons[name]}
                    onChange={() => toggleIcon(name)}
                    className="text-xs w-4 h-4 bg-[#212121] border-none rounded accent-[#212121] cursor-pointer focus:outline-none mr-2"
                  />
                  <span className="text-xs">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-8">Preview</h2>
        <div className="preview bg-white rounded-md p-8 overflow-auto">
          <div dangerouslySetInnerHTML={{ __html: signatureHtml }} id="preview"/>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-20">Generated HTML</h2>
        <div className="generated relative">
          <textarea
            id="signature-html"
            value={signatureHtml}
            readOnly
            className="font-mono text-xs leading-relaxed w-full h-80 p-4 bg-[#171717] rounded-2xl resize-none border border-transparent"
          />
          <div className="absolute bottom-4 right-4 flex h-9 items-center">
            <div className="flex items-center gap-4 rounded-sm">
              <button
                className="text-xs flex gap-1 items-center select-none py-1"
                aria-label="Copy"
                onClick={() => copyToClipboard(signatureHtml)}
              >
                {copied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                  </svg>
                )}
                <span>{copied ? "Copied!" : "Copy HTML"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
