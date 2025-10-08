function orderNow(itemName) {
    const message = encodeURIComponent(`Hi! I'm interested in buying: ${itemName}`);
    window.open(`https://m.me/YOUR_PAGE_USERNAME?text=${message}`, "_blank");
}
