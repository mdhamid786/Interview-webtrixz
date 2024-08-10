const baseUrl = process.env.APIBASEURL;

export async function postApiData(url, data) {
    
  const apiUrl = `${baseUrl}/${url}`;

  try {
    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: data,
    });

    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      const error = await result.json();
      return error;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}