export const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  };