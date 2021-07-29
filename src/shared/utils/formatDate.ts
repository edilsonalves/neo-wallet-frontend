const formatDate = (date: Date | string) => {
  const formatedDate = new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });

  return formatedDate;
};

export { formatDate };
