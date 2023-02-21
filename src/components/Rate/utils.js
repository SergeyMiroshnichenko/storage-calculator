export const pricesConfig = {
    backblaze: {storage: 0.005, transfer: 0.01, min: 7, color: 'red'},
    bunny: {ssd: {storage: 0.02, transfer: 0.01}, hdd: {storage: 0.01, transfer: 0.01}, max: 10, color: 'orange'},
    scaleway: {multi: {storage: 0.06, transfer: 0.02}, single: {storage: 0.03, transfer: 0.02}, color: 'purple'},
    vultr: {storage: 0.01, transfer: 0.01, min: 5, color: 'blue'}
}

export const getSumRestricted = (sum, configName) => (sum < pricesConfig[configName]?.min
    ? pricesConfig[configName]?.min
    : sum > pricesConfig[configName]?.max
    ? pricesConfig[configName]?.max : sum
)