// http://127.0.0.1:8000/api/v1/news/list


export async function getNewList() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/news/list', {
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
  