export function calculateOriginalPrice(discountedPrice, discountPercentage) {
    if (discountPercentage >= 100 || discountPercentage < 0) {
        throw new Error("Invalid discount percentage");
    }
    const originalPrice = discountedPrice / (1 - (discountPercentage / 100));
    return originalPrice.toFixed(2);
}