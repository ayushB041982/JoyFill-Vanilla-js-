let doc = null;
let mode = 'edit';
let pdfLink = null;

//userAccessToken and DocumentId ...

const userAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjY0NjczZmVhMmJiZDdmNGEwNjBkMjcyYSJ9.Tquo_jwLDHaNUWRgyd01htdYdC7XTOGGmEVnVRWs3os';
const documentId = 'doc_64705b5b9f29d9e110e1ef06';

//JoyFill Retrieve document function ....

const joyfillRetrieve = async () => {
  const response = await fetch(`https://api-joy.joyfill.io/v1/documents/${documentId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${userAccessToken}`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();

  const params = {
    mode: "edit",
    doc: data,
    onChange:
      (params, changes, doc) => {
        console.log(doc)
        console.log(doc),
        doc = doc
      }
  }

  const joyFill = JoyFill.default(params)
  document.getElementById('target').appendChild(joyFill);
}

//Save the form generate a pdf as an example.
// const saveForm = async (doc) => {
//   setLoading('saving document & generating pdf...');
//   await joyfillSave(doc, userAccessToken);
//   const downloadableLink = await joyfillGenerate(doc.identifier, userAccessToken);
//   setPdfLink(downloadableLink);
//   setLoading(null);
// }

// Joy fill element Load ..
Window.onload = joyfillRetrieve()
