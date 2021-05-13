const Reload = () => (setTimeout(() => {
    try {
        console.log("Test ads");
        window.reloadAdSlots();
    }
    catch {
        console.log("no ads");
    }
}, 0))

export default Reload;