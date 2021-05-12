const Reload = () => (setTimeout(() => {
    try {
        window.reloadAdSlots();
    }
    catch {
        console.log("no ads");
    }
}, 0))

export default Reload;