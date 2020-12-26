// AQI 标准
const AirQualityStandard = {
	CN: "HJ6332012.1",
	US: "EPA_NowCast.1"
}

let body = JSON.parse($response.body); 

// 选定 AQI 标准(默认 AQI-US)
body.air_quality.airQualityScale = AirQualityStandard.US;

body = JSON.stringify(body);
$done({body});