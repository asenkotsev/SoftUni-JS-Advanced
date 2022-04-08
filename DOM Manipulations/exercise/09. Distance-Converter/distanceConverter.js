function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);
    const dropdownFrom = document.getElementById('inputUnits');
    const dropdownTo = document.getElementById('outputUnits');
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');

    function convert() {
        const from = dropdownFrom.selectedIndex;
        const to = dropdownTo.selectedIndex;
        
        if (from.value == to.value) { output.value = Number(input.value) } // when from == to

        if (from == 0 && to == 1) { output.value = Number(input.value) * 1000 } // km to m
        if (from == 0 && to == 2) { output.value = Number(input.value) * 100000 } // km to cm
        if (from == 0 && to == 3) { output.value = Number(input.value) * 1e+6 } // km to mm
        if (from == 0 && to == 4) { output.value = Number(input.value) / 1.609 } // km to mi
        if (from == 0 && to == 5) { output.value = Number(input.value) * 1094 } // km to yrd
        if (from == 0 && to == 6) { output.value = Number(input.value) * 3281 } // km to ft
        if (from == 0 && to == 7) { output.value = Number(input.value) * 39370 } // km to in

        if (from == 1 && to == 0) { output.value = Number(input.value) / 1000 } // m to km
        if (from == 1 && to == 2) { output.value = Number(input.value) * 100 } // m to cm
        if (from == 1 && to == 3) { output.value = Number(input.value) * 1000 } // m to mm
        if (from == 1 && to == 4) { output.value = Number(input.value) / 1609 } // m to mi
        if (from == 1 && to == 5) { output.value = Number(input.value) * 1.094 } // m to yrd
        if (from == 1 && to == 6) { output.value = Number(input.value) * 3.281 } // m to ft
        if (from == 1 && to == 7) { output.value = Number(input.value) * 39.37 } // m to in

        if (from == 2 && to == 0) { output.value = Number(input.value) / 100000 } // cm to km
        if (from == 2 && to == 1) { output.value = Number(input.value) / 100 } // cm to m
        if (from == 2 && to == 3) { output.value = Number(input.value) * 10 } // cm to mm
        if (from == 2 && to == 4) { output.value = Number(input.value) / 160934 } // cm to mi
        if (from == 2 && to == 5) { output.value = Number(input.value) / 91.44 } // cm to yrd
        if (from == 2 && to == 6) { output.value = Number(input.value) / 30.48 } // cm to ft
        if (from == 2 && to == 7) { output.value = Number(input.value) / 2.54 } // cm to in

        if (from == 3 && to == 0) { output.value = Number(input.value) / 1e+6 } // mm to km
        if (from == 3 && to == 1) { output.value = Number(input.value) / 1000 } // mm to m
        if (from == 3 && to == 2) { output.value = Number(input.value) / 10 } // mm to cm
        if (from == 3 && to == 4) { output.value = Number(input.value) / 1.609e+6 } // mm to mi
        if (from == 3 && to == 5) { output.value = Number(input.value) / 914 } // mm to yrd
        if (from == 3 && to == 6) { output.value = Number(input.value) / 304.8 } // mm to ft
        if (from == 3 && to == 7) { output.value = Number(input.value) / 25.4 } // mm to in

        if (from == 4 && to == 0) { output.value = Number(input.value) * 1.609 } // mi to km
        if (from == 4 && to == 1) { output.value = Number(input.value) * 1609 } // mi to m
        if (from == 4 && to == 2) { output.value = Number(input.value) * 160934 } // mi to cm
        if (from == 4 && to == 3) { output.value = Number(input.value) * 1.609e+6 } // mi to mm
        if (from == 4 && to == 5) { output.value = Number(input.value) * 1760 } // mi to yrd
        if (from == 4 && to == 6) { output.value = Number(input.value) * 5280 } // mi to ft
        if (from == 4 && to == 7) { output.value = Number(input.value) * 63360 } // mi to in

        if (from == 5 && to == 0) { output.value = Number(input.value) / 1094 } // yrd to km
        if (from == 5 && to == 1) { output.value = Number(input.value) / 1.094 } // yrd to m
        if (from == 5 && to == 2) { output.value = Number(input.value) * 91.44 } // yrd to cm
        if (from == 5 && to == 3) { output.value = Number(input.value) * 914 } // yrd to mm
        if (from == 5 && to == 4) { output.value = Number(input.value) / 1760 } // yrd to mi
        if (from == 5 && to == 6) { output.value = Number(input.value) * 3 } // yrd to ft
        if (from == 5 && to == 7) { output.value = Number(input.value) * 36 } // yrd to in

        if (from == 6 && to == 0) { output.value = Number(input.value) / 3281 } // ft to km
        if (from == 6 && to == 1) { output.value = Number(input.value) / 3.281 } // ft to m
        if (from == 6 && to == 2) { output.value = Number(input.value) * 30.48 } // ft to cm
        if (from == 6 && to == 3) { output.value = Number(input.value) * 304.8 } // ft to mm
        if (from == 6 && to == 4) { output.value = Number(input.value) / 5280 } // ft to mi
        if (from == 6 && to == 5) { output.value = Number(input.value) / 3 } // ft to yrd
        if (from == 6 && to == 7) { output.value = Number(input.value) * 12 } // ft to in

        if (from == 7 && to == 0) { output.value = Number(input.value) / 39370 } // in to km
        if (from == 7 && to == 1) { output.value = Number(input.value) / 39.37 } // in to m
        if (from == 7 && to == 2) { output.value = Number(input.value) * 2.54 } // in to cm
        if (from == 7 && to == 3) { output.value = Number(input.value) * 25.4 } // in to mm
        if (from == 7 && to == 4) { output.value = Number(input.value) / 63360 } // in to mi
        if (from == 7 && to == 5) { output.value = Number(input.value) / 36 } // in to yrd
        if (from == 7 && to == 6) { output.value = Number(input.value) / 12 } // in to ft
    }
}