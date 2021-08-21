
export const getKeysAndUnits = (string) => {
    var returnedObj = {};
    switch (string) {
        case 'elexon':
            returnedObj.dataKeyOne = "Time"
            returnedObj.dataKeyTwo = "Demand"
            returnedObj.labelX = "Time (GMT)"
            returnedObj.labelY = "Demand (Mw)"

            break;
        case 'carbon':
            returnedObj.dataKeyOne = "To"
            returnedObj.labelX = "Time in GMT"
            returnedObj.labelY = "Carbon Intensity (gCO2/kWh) "
            returnedObj.dataKeyTwo = "Intensity"
            break;
        case 'wind':
            returnedObj.dataKeyOne = "period"
            returnedObj.labelX = "Time in GMT"
            returnedObj.labelY = "Wind Energy (MW)"
            returnedObj.dataKeyTwo = "quantitysettlementDate"
            break;
        case 'solar':
            returnedObj.dataKeyOne = "Time1"
            returnedObj.dataKeyTwo = "generation_mw"
            returnedObj.labelX = "Time in GMT"
            returnedObj.labelY = "Solar Energy Production (MW) "
            break;
        case 'energytransmit':
            returnedObj.dataKeyOne = "date"
            returnedObj.dataKeyTwo = "volume"
            returnedObj.labelX = "date"
            returnedObj.labelY = "Demand (MWh) "
            break;
        case 'elexonprice':
            returnedObj.dataKeyOne = "period"
            returnedObj.dataKeyTwo = "price"
            returnedObj.labelX = "Period"
            returnedObj.labelY = "Price (£/MWh)"
            break;
        case 'energyfrequency':
            returnedObj.dataKeyOne = "time"
            returnedObj.dataKeyTwo = "frequency"
            returnedObj.labelX = "Time in GMT"
            returnedObj.labelY = "Frequency (Hz)"
            break;
        case 'fuel':
            returnedObj.dataKeyOne = "date"
            returnedObj.dataKeyTwo = "nuclear"
            returnedObj.dataKeyTwoI = "turbine"
            returnedObj.dataKeyTwoII = "gas"
            returnedObj.dataKeyTwoIII = "coal"
            returnedObj.dataKeyTwoIV = "hydro"
            returnedObj.labelX = "Time in GMT"
            returnedObj.lebelY = "Energy (MW)"
            break;
        case 'prediction':
            returnedObj.dataKeyOne = "date"
            returnedObj.dataKeyTwo = "MW_Prediction"
            returnedObj.labelX = "Day";
            returnedObj.labelY = "Daily Transmition (MW) ";
            break;
        case 'testSet':
            returnedObj.dataKeyOne = "date"
            returnedObj.dataKeyTwo = "MW_Prediction"
            returnedObj.labelX = "Day";
            returnedObj.labelY = "Demand Forecasting (MW)";
            break;



        default:

            break;
    }
    returnedObj.dataType = string;
    return returnedObj;


}


export const getFinalArray = (dataScreen, dataType) => {
    var arrayTobReturned = [];

    if (dataScreen) {
        switch (dataType) {
            case 'elexon':
                var sorted = dataScreen.sort((a, b) => a.Demand - b.Demand)
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].Demand,
                        absoluteMinValue: sorted[0].Demand
                    },
                    {
                        label: 'Peak Energy demand',
                        value: sorted[sorted.length - 1].Demand + ' at ' + sorted[sorted.length - 1].Time + ' GMT',
                    },
                    {
                        label: 'Min Energy demand',
                        value: sorted[0].Demand + ' at ' + sorted[0].Time + ' GMT',
                    }
                ]
                break;
            case 'carbon':
                var sorted = dataScreen.sort((a, b) => a.Intensity - b.Intensity)
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += value.Intensity;
                })
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].Intensity,
                        absoluteMinValue: sorted[0].Intensity
                    },
                    {
                        label: 'Max Intensity',
                        value: sorted[sorted.length - 1].Intensity + ' at ' + sorted[sorted.length - 1].To + ' GMT',
                    },
                    {
                        label: 'Min Intensity',
                        value: sorted[0].Intensity + ' at ' + sorted[0].To + ' GMT',
                    }
                    ,
                    {
                        label: 'Average Intensity',
                        value: (sum / dataScreen.length),
                    }

                ]
                console.log('Max value of carbon is ' + arrayTobReturned[0].absoluteMaxValue)
                console.log('Max value of carbon is ' + arrayTobReturned[0].absoluteMinValue)
                break;
            case 'solar':
                var sorted = dataScreen.sort((a, b) => a.generation_mw - b.generation_mw)
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += parseFloat(value.generation_mw);
                })
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].generation_mw,
                        absoluteMinValue: sorted[0].generation_mw
                    },
                    {
                        label: 'Max Energy',
                        value: sorted[sorted.length - 1].generation_mw + ' at ' + sorted[sorted.length - 1].Time1 + ' GMT',
                    },
                    {
                        label: 'Min Energy',
                        value: sorted[0].generation_mw + ' at ' + sorted[0].Time1 + ' GMT',
                    },
                    {
                        label: ' Average Energy',
                        value: (sum / dataScreen.length),
                    }
                ]
                break;

            case 'elexonprice':
                var sorted = dataScreen.sort((a, b) => a.price - b.price)
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].price,
                        absoluteMinValue: sorted[0].price
                    },

                    {
                        label: 'Max Energy Price',
                        value: sorted[sorted.length - 1].price + ' during ' + sorted[sorted.length - 1].period,
                    },
                    {
                        label: 'Min Energy Price',
                        value: sorted[0].price + ' during ' + sorted[0].period,
                    }
                ]
                break;
            case 'energytransmit':
                var sorted = dataScreen.sort((a, b) => a.volume - b.volume)
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].volume,
                        absoluteMinValue: sorted[0].volume
                    },

                    {
                        label: 'Peak Energy Transmit',
                        value: sorted[sorted.length - 1].volume + ' at ' + sorted[sorted.length - 1].date,
                    },
                    {
                        label: 'Min Energy Transmit',
                        value: sorted[0].volume + ' at ' + sorted[0].date,
                    }
                ]
                break;
            case 'energyfrequency':
                var sorted = dataScreen.sort((a, b) => parseFloat(a.volume) - parseFloat(b.volume))
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += parseFloat(value.frequency);

                })
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].volume,
                        absoluteMinValue: sorted[0].volume
                    },
                    {
                        label: 'Avg frequency',
                        value: (sum / dataScreen.length).toFixed(2)
                    }
                ]
                break;
            case 'wind':
                var sorted = dataScreen.sort((a, b) => parseFloat(a.quantitysettlementDate) - parseFloat(b.quantitysettlementDate))
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += parseFloat(value.quantitysettlementDate);

                })
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].quantitysettlementDate,
                        absoluteMinValue: sorted[0].quantitysettlementDate
                    },
                    {
                        label: 'Max wind energy',
                        value: sorted[sorted.length - 1].quantitysettlementDate + ' at ' + sorted[sorted.length - 1].period,
                    },
                    {
                        label: 'Min wind energy',
                        value: sorted[0].volume + ' during ' + sorted[0].period,
                    },
                    {
                        label: 'Average wind energy',
                        value: (sum / dataScreen.length).toFixed(2)
                    }
                ]
                break;
            case 'prediction':
                var sorted = dataScreen.sort((a, b) => parseFloat(a.MW_Prediction) - parseFloat(b.MW_Prediction))
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += parseFloat(value.MW_Prediction);

                })
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].MW_Prediction,
                        absoluteMinValue: sorted[0].MW_Prediction
                    }
                ]
                break;
            case 'testSet':
                var sorted = dataScreen.sort((a, b) => parseFloat(a.MW_Prediction) - parseFloat(b.MW_Prediction))
                var sum = 0;
                dataScreen.map((value, index) => {
                    sum += parseFloat(value.MW_Prediction);

                })
                arrayTobReturned = [
                    {
                        absoluteMaxValue: sorted[sorted.length - 1].MW_Prediction,
                        absoluteMinValue: sorted[0].MW_Prediction
                    }
                ]
                break;

            default:
                break;
        }
        return arrayTobReturned;

    }
    else return null;
}


