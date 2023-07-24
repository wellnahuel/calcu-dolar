export const getCotizacion = async () => {
    const res = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
    return res.json();
  };