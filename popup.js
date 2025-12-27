let historyAll = [];
let historyWeekly = [];

// Acceder al historial
async function loadHistory() {
    const result = await chrome.storage.local.aget(['historyAll', 'historyWeekly']);

    if ( result.historyAll){
        historyAll = result.historyAll;
    }
    if (result.historyWeekly){
        historyWeekly = result.historyWeekly;
    }
    
}

// Cargar historial
loadHistory();