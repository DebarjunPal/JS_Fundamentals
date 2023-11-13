function canBreathe(isConnected, hasOxygen, aboveWater) {
    return (isConnected && hasOxygen) || aboveWater;
}

module.exports = canBreathe;