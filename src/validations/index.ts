const EMAIL_PATTERN = new RegExp(
  /^([\w!#$%&'*+\-/=?^`{|}~]+(\.[\w!#$%&'*+\-/=?^`{|}~]+)*|"([\w!#$%&'*+\-/=?^`{|}~. ()<>[\]:;@,]|\\[\\"])+")@(([a-zA-Z\d-]+\.)+[a-zA-Z]+|\[(\d{1,3}(\.\d{1,3}){3}|IPv6:[\da-fA-F]{0,4}(:[\da-fA-F]{0,4}){1,5}(:\d{1,3}(\.\d{1,3}){3}|(:[\da-fA-F]{0,4}){0,2}))\])$/
);

export const validationEmail = (email: string) => {
  if (!EMAIL_PATTERN.test(email))
    return "メールアドレスの形式で入力してください。";

  return undefined;
};

export const validationEmptyValue = (value: string, label: string) => {
  if (!value) return `${label}を入力してください。`;

  return undefined;
};
