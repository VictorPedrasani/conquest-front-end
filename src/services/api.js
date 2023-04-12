const url = "http://localhost:8080/conquest";

export const ApiUserCad = async (nameUser, cpf, email, password, group, status) => {
  let data;
  await fetch(`${url}/backoffice/user/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nameUser: nameUser,
      cpf: cpf,
      email: email,
      password: password,
      group: group,
      status: true
    }),
  })
    .then(async (response) => {
      data = await response.json();
    })
    .catch(async (error) => {
      data = await error.json();
    });
  console.log(data);
  return data;
};

export const ApiUserAlt = async (nameUser, cpf, password, group, status) => {
  let data;
  const object = JSON.stringify({
    nameUser: nameUser,
    cpf: cpf,
    password: password,
    group: group,
    status: status,
  })
  await fetch(`${url}/backoffice/user/update`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body:object,
  })
    .then(async (response) => {
      data = await response.json();
    })
    .catch(async (error) => {
      console.log(object)
      //data = await error.json();
    });
  console.log(data);
  return data;
};

export const ApiUserList = async () => {
  let data;
  const object = []
  await fetch(`${url}/backoffice/user/list`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    }
  })
    .then(async (response) => {
      data = await response.json();
    })
    .catch(async (error) => {
      console.log(object)
      //data = await error.json();
    });
  return data;
};