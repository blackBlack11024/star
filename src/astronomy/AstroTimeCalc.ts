import SunCalc from 'suncalc';
import { DeepSkyObjectData } from '../types';

export interface TargetVisibilityInfo {
  isCurrentlyVisible: boolean;
  currentAltitude: number; // degrees
  riseTimeStr: string | null;
  setTimeStr: string | null;
  bestTimeStr: string;
  bestDate: Date | null;
  summary: string;
}

/**
 * Calculates real-time astronomical visibility, rise/set times, and optimal observation window
 * for a celestial target at a given location and date.
 */
export function calculateTargetVisibility(
  dso: DeepSkyObjectData,
  latitude: number,
  longitude: number,
  currentDate: Date
): TargetVisibilityInfo {
  const latRad = (latitude * Math.PI) / 180;
  const decRad = (dso.dec * Math.PI) / 180;

  // Helper to compute target altitude at a specific Date
  function getAltitudeAt(date: Date): number {
    const jd = date.getTime() / 86400000.0 + 2440587.5;
    const d_j2000 = jd - 2451545.0;
    const gmst = (18.697374558 + 24.06570982441908 * d_j2000) % 24;
    const gmstAdj = gmst < 0 ? gmst + 24 : gmst;
    const lst = (gmstAdj + longitude / 15) % 24;
    const lstAdj = lst < 0 ? lst + 24 : lst;

    let haHours = (lstAdj - dso.ra) % 24;
    if (haHours < 0) haHours += 24;
    const haRad = (haHours * 15 * Math.PI) / 180;

    const sinAlt =
      Math.sin(latRad) * Math.sin(decRad) +
      Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
    return (Math.asin(Math.max(-1, Math.min(1, sinAlt))) * 180) / Math.PI;
  }

  // Helper to check if it is dark (Sun altitude <= -10 deg)
  function isDarkAt(date: Date): boolean {
    const sunPos = SunCalc.getPosition(date, latitude, longitude);
    return sunPos.altitude * (180 / Math.PI) <= -10;
  }

  const currentAlt = getAltitudeAt(currentDate);
  const isDarkNow = isDarkAt(currentDate);
  const isCurrentlyVisible = currentAlt >= 12 && isDarkNow;

  // Sample 24 hours of the current day to find rise time, set time, and best observation hour
  const startOfDay = new Date(currentDate);
  startOfDay.setHours(12, 0, 0, 0); // Start from today's noon to tomorrow's noon

  let riseDate: Date | null = null;
  let setDate: Date | null = null;
  let maxAltInDark = -999;
  let bestDate: Date | null = null;
  let darkVisibleHours: number[] = [];

  for (let min = 0; min <= 24 * 60; min += 15) {
    const sampleDate = new Date(startOfDay.getTime() + min * 60 * 1000);
    const alt = getAltitudeAt(sampleDate);
    const dark = isDarkAt(sampleDate);

    // Track rise (> 10 deg)
    if (alt >= 10 && !riseDate) {
      riseDate = sampleDate;
    }
    // Track set (< 10 deg after rising)
    if (alt < 10 && riseDate && !setDate) {
      setDate = sampleDate;
    }

    if (dark && alt >= 12) {
      darkVisibleHours.push(sampleDate.getHours());
      if (alt > maxAltInDark) {
        maxAltInDark = alt;
        bestDate = sampleDate;
      }
    }
  }

  const formatHourMin = (d: Date) =>
    d.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false });

  const riseTimeStr = riseDate ? formatHourMin(riseDate) : null;
  const setTimeStr = setDate ? formatHourMin(setDate) : null;

  let bestTimeStr = '深夜時段';
  if (darkVisibleHours.length > 0) {
    const minH = Math.min(...darkVisibleHours);
    const maxH = Math.max(...darkVisibleHours);
    const pad = (n: number) => n.toString().padStart(2, '0');
    bestTimeStr = `${pad(minH)}:00 ~ ${pad((maxH + 1) % 24)}:00`;
  } else if (riseTimeStr) {
    bestTimeStr = `升起後 (${riseTimeStr})`;
  }

  let summary = '';
  if (isCurrentlyVisible) {
    summary = `✨ 目前空中可見（仰角 ${Math.round(currentAlt)}° · 正值最佳觀測時段）`;
  } else if (!isDarkNow) {
    summary = `☀️ 目前為白天，夜間最佳觀測時段為 ${bestTimeStr}`;
  } else if (currentAlt < 10) {
    summary = riseTimeStr
      ? `⏳ 目前在地平線下（預計 ${riseTimeStr} 升起 · 最佳觀測：${bestTimeStr}）`
      : `⏳ 最佳觀測時段為 ${bestTimeStr}`;
  } else {
    summary = `⏳ 最佳觀測時段為 ${bestTimeStr}`;
  }

  return {
    isCurrentlyVisible,
    currentAltitude: currentAlt,
    riseTimeStr,
    setTimeStr,
    bestTimeStr,
    bestDate,
    summary,
  };
}
