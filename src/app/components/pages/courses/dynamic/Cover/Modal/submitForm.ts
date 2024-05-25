import React, { Dispatch, FormEvent } from 'react';
export async function submitForm(
  e: FormEvent,
  name: string,
  mobile: string,
  email: string,
  comment: string,
  checker: boolean,
  setNameErr: Dispatch<boolean>,
  setMobileErr: Dispatch<boolean>,
  setEmailErr: Dispatch<boolean>,
  setCheckErr: Dispatch<boolean>,
  setModal: Dispatch<boolean>,
  courseName: string
) {
  e.preventDefault();
  if (name === '') {
    setNameErr(true);
  } else {
    setNameErr(false);
  }
  if (mobile === '') {
    setMobileErr(true);
  } else {
    setMobileErr(false);
  }
  if (email === '') {
    setEmailErr(true);
  } else {
    setEmailErr(false);
  }
  if (checker === false) {
    setCheckErr(true);
  } else {
    setCheckErr(false);
  }
  if (name !== '' && mobile !== '' && email !== '' && checker) {
    const yourQuest = {
      data: {
        courseName: courseName,
        phone: mobile,
        name: name,
        email: email,
        comment: comment,
      },
    };
    //     console.log(yourQuest);
    //     const sendData = await fetch(
    //       'http://77.232.128.234:1337/api/common-questions',
    //       {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(yourQuest),
    //       }
    //     );
    //     const sendResponse = await sendData.json();
    //     console.log(sendResponse);
    setModal(false);
    alert('Запись произведена успешно');
  }
}
