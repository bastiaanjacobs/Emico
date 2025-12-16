import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Voornaam Achternaam");
  const [title, setTitle] = useState("Developer");
  const [workdays, setWorkdays] = useState("ma-di-wo-do");
  const [email, setEmail] = useState("info@emico.nl");
  const [phone, setPhone] = useState("+31 85 888 77 44");
  const [address, setAddress] = useState("Utrechtsestraatweg 157, 3911 TS Rhenen");
  const [mobile, setMobile] = useState("");

  const baseUrl = 'https://bastiaanjacobs.github.io/Emico/';
  const logoSrc = baseUrl+'logo.svg';

  const mailWidth = '580';

  const mainColor = "#0a568c"; // Default Color
  const bgColor = "#ffffff"; // Background Color

  const [copiedHtml, setCopiedHtml] = useState(false);

  // Copy raw HTML
  const copyHtmlToClipboard = () => {
    navigator.clipboard.writeText(signatureHeader + "\n\n" + signatureHtml);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const [icons, setIcons] = useState({
    linkedin: true,
    whatsapp: true
  });

  const toggleIcon = (name) => {
    setIcons((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const signatureHeader = `Mime-Version: 1.0
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: 8bit`

  const signatureHtml = `<html>
  <head>
    <style>
      @media only screen and (max-width:480px) {
        table {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          text-align: left !important;
          border-left: none !important;
          padding-left: 0 !important;
        }
        .column.logo {
          padding: 0 !important;
          height: 40px !important;
        }
        .column.gptw {
          padding: 0 !important;
        }
        .column.location {
          padding: 15px 0 10px 0 !important;
        }
        .column.socials {
          padding: 0 !important;
        }
        .column.socials a {
          margin: 0 5px 0 0 !important;
        }
        .workdays {
          margin: 20px 0 10px 0 !important;
        }
      }
    </style>
  </head>
  <body>
    <table width="${mailWidth}" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 12px; color: #111111; background: #ffffff;">
      <!-- Row 1: Logo, Name/Title, Contact -->
      <tr>
        <td class="column logo" style="vertical-align: middle; text-align: left; padding-right: 10px; height: 90px;">
          <a href="https://www.emico.nl">
            <img src="${baseUrl}emico-logo.png" alt="Emico Logo" width="80" height="15" style="display: block;"/>
          </a>
        </td>
        <td class="column" style="vertical-align: top; padding-left: 20px; border-left: 1px solid #eeeeee;">
          <p style="margin: 0px 0px 5px 0px; font-size: 18px; font-weight: bold; line-height: 1.2; color: ${mainColor};">${name}</p>
          <p style="margin: 0px; font-size: 10px; color: #505050; letter-spacing: 0.5px; text-transform: uppercase;">
            ${title}
            <img src="${baseUrl}slash.png" alt="Slash Icon" width="9" height="10" style="vertical-align: middle; margin-left: 2px;"/>
          </p>
          ${workdays ? `<p class="workdays" style="margin: 20px 0 0 0; font-size: 10px; color: #828282;">Workdays: ${workdays}</p>` : ''}
        </td>
        <td class="column" style="vertical-align: top; text-align: right; padding-left: 15px;">
          <p style="margin: 0 0 8px 0; font-size: 10px; line-height: 1;">
            <span style="font-size: 8px; font-weight: 500; color: #505050; letter-spacing: 0.5px;">WEBSITE</span>
            <a href="https://www.emico.nl" style="color: #333333; font-weight: 600; text-decoration: none; font-size: 10px;">
              <img src="${baseUrl}slash-dark.png" alt="Slash" width="8" height="8" style="vertical-align: middle; margin: 0 4px; display: inline-block;"/>
              <span style="color: #333333; text-decoration: none;">www.emico.nl</span>
            </a>
          </p>
          <p style="margin: 0 0 8px 0; font-size: 10px; line-height: 1;">
            <span style="font-size: 8px; font-weight: 500; color: #505050; letter-spacing: 0.5px;">PHONE</span>
            <span style="color: #333333; font-weight: 600; font-size: 10px;">
              <img src="${baseUrl}slash-dark.png" alt="Slash" width="8" height="8" style="vertical-align: middle; margin: 0 4px; display: inline-block;"/>
              <span style="color: #333333; text-decoration: none;">${phone}</span>
            </span>
          </p>
          <p style="margin: 0 0 8px 0; font-size: 10px; line-height: 1;">
            <span style="font-size: 8px; font-weight: 500; color: #505050; letter-spacing: 0.5px;">EMAIL</span>
            <a href="mailto:${email}" style="color: #333333; font-weight: 600; font-size: 10px; text-decoration: none;">
              <img src="${baseUrl}slash-dark.png" alt="Slash" width="8" height="8" style="vertical-align: middle; margin: 0 4px; display: inline-block;"/>
              <span style="color: #333333; text-decoration: none;">${email}</span>
            </a>
          </p>
          ${mobile ? `<p style="margin: 0 0 8px 0; font-size: 10px; line-height: 1;">
            <span style="font-size: 8px; font-weight: 500; color: #505050; letter-spacing: 0.5px;">MOBILE</span>
            <span style="color: #333333; font-weight: 600; font-size: 10px;">
              <img src="${baseUrl}slash-dark.png" alt="Slash" width="8" height="8" style="vertical-align: middle; margin: 0 4px; display: inline-block;"/>
              <span style="color: #333333; text-decoration: none;">${mobile}</span>
            </span>
          </p>` : ''}
        </td>
      </tr>
      <!-- Row 2: GPTW, Address, Social Icons -->
      <tr>
        <td  class="column gptw" style="vertical-align: middle; text-align: left; height: 40px; padding-right: 10px; background: ${bgColor};">
          <a href="https://www.emico.nl/vacatures" target="_blank" rel="noopener noreferrer">
            <img src="${baseUrl}gptw-outline.png" alt="GPTW Logo" width="40" height="40" style="display: inline-block;"/>
          </a>
        </td>
        <td class="column location" style="vertical-align: bottom; padding-left: 20px; border-left: 1px solid #eeeeee; background: ${bgColor};">
          <p style="margin: 0; font-size: 10px; color: #828282;">
            <img src="${baseUrl}icon-address.png" alt="Address" width="12" height="12" style="vertical-align: middle; margin-right: 5px; display: inline-block;"/>
            <span style="text-decoration: none;">${address}</span>
          </p>
        </td>
        <td class="column socials" style="vertical-align: bottom; text-align: right; background: ${bgColor};">
          ${icons.linkedin ? `<a href="https://nl.linkedin.com/company/emico-e-commerce" style="display: inline-block; width: 20px; height: 20px; margin-left: 5px;">
            <img src="${baseUrl}icon-linkedin.png" width="20" height="20" alt="LinkedIn" style="display: inline-block;"/>
          </a>` : ''}
          ${icons.whatsapp ? `<a href="https://wa.me/31858887744" style="display: inline-block; width: 20px; height: 20px; margin-left: 5px;">
            <img src="${baseUrl}icon-whatsapp.png" width="20" height="20" alt="WhatsApp" style="display: inline-block;"/>
          </a>` : ''}
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
        <div className="preview bg-white rounded-md p-8 overflow-auto relative">
          <div dangerouslySetInnerHTML={{ __html: signatureHtml }} id="preview"/>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-20">Generated HTML</h2>
        <div className="generated relative">
          <textarea
            id="signature-html"
            value={signatureHeader + "\n\n" + signatureHtml}
            readOnly
            className="font-mono text-xs leading-relaxed w-full h-80 p-4 bg-[#171717] rounded-2xl resize-none border border-transparent"
          />
          <div className="absolute bottom-4 right-4 flex h-9 items-center">
            <div className="flex items-center gap-4 rounded-sm">
              <button
                className="copy-html text-xs flex gap-1 items-center select-none py-1 text-[#f1f1f1] bg-[#171717]"
                aria-label="Copy HTML"
                onClick={copyHtmlToClipboard}
              >
                {copiedHtml ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
                  </svg>
                )}
                <span>{copiedHtml ? "Copied!" : "Copy HTML"}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs my-4 text-gray-700">
          open ~/Library/Mail/V10/MailData/Signatures/
        </div>
      </div>
    </section>
  );
}

export default App;
