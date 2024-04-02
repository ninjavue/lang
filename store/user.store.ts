export async function getUserInfo() {
    try {
      const response = await fetch('http://178.218.200.199:9090/api/v1/accounts/personal_data/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        const jsonData = await response.json();
        return jsonData.data;
      } else {
        throw new Error('Foydalanuvchi ma`lumotlarini olishda xatolik');
      }
    } catch (error) {
      throw error;
    }
  }
  