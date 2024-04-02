// http://127.0.0.1:8000/api/v1/news/list

interface New {
  title: string,
  body: string
}

export async function getNewList() {
    try {
      const response = await fetch('http://178.218.200.199:9090/api/v1/news/list', {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        throw new Error('News list olishda xatolik yuz berdi');
      }
    } catch (error) {
      throw error;
    }
}
  

export async function createNews(data:New) {
    try {
      console.log(data)
      const response = await fetch('http://178.218.200.199:9090/api/v1/news/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      throw error;
    }
}
  