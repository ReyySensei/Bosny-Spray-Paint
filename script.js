function orderNow(itemName) {
    const message = encodeURIComponent(`Hi! I'm interested in buying: ${itemName}`);
    window.open(`https://m.me/johnlolikz?text=${message}`, "_blank");
}
