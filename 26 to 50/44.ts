const fetchData = async <T>(url: string) => {
  const data: T = await fetch(url).then(res => res.json());
  return data;
};

const data = fetchData<{ ak: string }>("dfsakjfdasjfasf");
