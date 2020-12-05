exports.bytes["C0"] = {
    "subfilters",
    "functions" : {
      "00/00" : "NUL",
      "00/01" : "SOH",
      "00/02" : "STX",
      "00/03" : "ETX",
      "00/04" : "EOT",
      "00/05" : "ENQ",
      "00/06" : "ACK",
      "00/07" : "BEL",
      "00/08" : "BS",
      "00/09" : "HT",
      "00/10" : "LF",
      "00/11" : "VT",
      "00/12" : "FF",
      "00/13" : "CR",
      "00/14" : "SO",
      "00/15" : "SI",
      "01/00" : "DLE",
      "01/01" : "DC1",
      "01/02" : "DC2",
      "01/03" : "DC3",
      "01/04" : "DC4",
      "01/05" : "NAK",
      "01/06" : "SYN",
      "01/07" : "ETB",
      "01/08" : "CAN",
      "01/09" : "EM",
      "01/10" : "SUB",
      "01/11" : "ESC",
      "01/12" : "IS4",
      "01/13" : "IS3",
      "01/14" : "IS2",
      "01/15" : "IS1",
    }
  }
exports.bytes["C1"] = {
    "subfilters" : [
      { //7-bit (ECMA-6)
        "^" : "01/11 ", //ESC
        "xx" : "04",
        "XX" : "05"
      },
      { //8-bit (ECMA-43)
        "^" : "",
        "xx" : "08",
        "XX" : "09"
      }
    ],
    "functions" : {
      "xx/00",
      "xx/01",
      "xx/02" : "BPH",
      "xx/03" : "NBH",
      "xx/04",
      "xx/05" : "NEL",
      "xx/06" : "SSA",
      "xx/07" : "ESA",
      "xx/08" : "HTS",
      "xx/09" : "HTJ",
      "xx/10" : "VTS",
      "xx/11" : "PLD",
      "xx/12" : "PLU",
      "xx/13" : "R1",
      "xx/14" : "SS2",
      "xx/15" : "SS3",
      "XX/00" : "DCS",
      "XX/01" : "PU1",
      "XX/02" : "PU2",
      "XX/03" : "STS",
      "XX/04" : "CCH",
      "XX/05" : "MW",
      "XX/06" : "SPA",
      "XX/07" : "EPA",
      "XX/08" : "SOS",
      "XX/09",
      "XX/10" : "SCI",
      "XX/11" : "CSI",
      "XX/12" : "ST",
      "XX/13" : "OSC",
      "XX/14" : "PM",
      "XX/15" : "APC",
    }
  }
exports.sequences["Control sequences"] = {
    "function-identifier-location" : "^"
    "subfilter-masters" : {
      "parameter byte" : {
        "range" : {
          "entire" : [ "03/00", "03/15" ],
          "subranges" : {
            "defined" : [ "03/00", "03/09"],
            "undefined" : [ "03/12", "03/15" ],
            "delimeters" : {
              "inter" : "03/11" //; - delimeter between parameters,
              "inner" : "03/10" //: - subdelimeter
            }
          }
        }
      }
    }
    "subfilters" : [
      { //7-bit (ECMA-6)
        "CSI" : "01/11 05/11", //ESC [
        "Pn" : {
          "master" : "parameter byte",
          "name" : "singular numeric parameter",
          "remove" : "range.subranges.delimeters"
        },
        "Pn(?<param>\\d)" : {
          "master" : "parameter byte",
          "name" : "numeric parameter",
          "regex" : {
            "param" : "parameter number"
          }
        },
        "Ps" : {
          "master" : "parameter byte",
          "name" : "singular selective parameter",
          "remove" : "range.subranges.delimeters"
        },
        "Ps(?<param>\\d)" : {
          "master" : "parameter byte",
          "name" : "selective parameter",
          "regex" : {
            "param" : "parameter number"
          }
        }
      },
      { //8-bit (ECMA-43)
        "CSI" : "09/11", //CSI
        "Pn" : {
          "master" : "parameter byte",
          "name" : "singular numeric parameter",
          "remove" : "range.subranges.delimeters"
        },
        "Pn(?<param>\\d)" : {
          "master" : "parameter byte",
          "name" : "numeric parameter",
          "regex" : {
            "param" : "parameter number"
          }
        },
        "Ps" : {
          "master" : "parameter byte",
          "name" : "singular selective parameter",
          "remove" : "range.subranges.delimeters"
        },
        "Ps(?<param>\\d)" : {
          "master" : "parameter byte",
          "name" : "selective parameter",
          "regex" : {
            "param" : "parameter number"
          }
        }
      }
    ],
    "functions" : {
      "__by_F_byte" : {
        "no I byte" : {
          "04/00" : "ICH",
          "04/01" : "CUU",
          "04/02" : "CUD",
          "04/03" : "CUF",
          "04/04" : "CUB",
          "04/05" : "CNL",
          "04/06" : "CPL",
          "04/07" : "CHA",
          "04/08" : "CUP",
          "04/09" : "CHT",
          "04/10" : "ED",
          "04/11" : "EL",
          "04/12" : "IL",
          "04/13" : "DL",
          "04/14" : "EF",
          "04/15" : "EA",
          "05/00" : "DCH",
          "05/01" : "SSE",
          "05/02" : "CPR",
          "05/03" : "SU",
          "05/04" : "SD",
          "05/05" : "NP",
          "05/06" : "PP",
          "05/07" : "CTC",
          "05/08" : "ECH",
          "05/09" : "CVT",
          "05/10" : "CBT",
          "05/11" : "SRS",
          "05/12" : "PTX",
          "05/13" : "SDS",
          "05/14" : "SIMD",
          "05/15",
          "06/00" : "HPA",
          "06/01" : "HPR",
          "06/02" : "REP",
          "06/03" : "DA",
          "06/04" : "VPA",
          "06/05" : "VPR",
          "06/06" : "HVP",
          "06/07" : "TBC",
          "06/08" : "SM",
          "06/09" : "MC",
          "06/10" : "HPB",
          "06/11" : "VPB",
          "06/12" : "RM",
          "06/13" : "SGR",
          "06/14" : "DSR",
          "06/15" : "DAQ",
          "07/00",
          "07/01",
          "07/02",
          "07/03",
          "07/04",
          "07/05",
          "07/06",
          "07/07",
          "07/08",
          "07/09",
          "07/10",
          "07/11",
          "07/12",
          "07/13",
          "07/14",
          "07/15"
        },
        "single 02/00 I byte" : { //the "space" character
          "04/00" : "SL",
          "04/01" : "SR",
          "04/02" : "GSM",
          "04/03" : "GSS",
          "04/04" : "FNT",
          "04/05" : "TSS",
          "04/06" : "JFY",
          "04/07" : "SPI",
          "04/08" : "QUAD",
          "04/09" : "SSU",
          "04/10" : "PFS",
          "04/11" : "SHS",
          "04/12" : "SVS",
          "04/13" : "IGS",
          "04/14",
          "04/15" : "IDCS",
          "05/00" : "PPA",
          "05/01" : "PPR",
          "05/02" : "PPB",
          "05/03" : "SPD",
          "05/04" : "DTA",
          "05/05" : "SHL",
          "05/06" : "SLL",
          "05/07" : "FNK",
          "05/08" : "SPQR",
          "05/09" : "SEF",
          "05/10" : "PEC",
          "05/11" : "SSW",
          "05/12" : "SACS",
          "05/13" : "SAPV",
          "05/14" : "STAB",
          "05/15" : "GCC",
          "06/00" : "TATE",
          "06/01" : "TALE",
          "06/02" : "TAC",
          "06/03" : "TSR",
          "06/04" : "SCO",
          "06/05" : "SRCS",
          "06/06" : "SCS",
          "06/07" : "SLS",
          "06/08",
          "06/09",
          "06/10" : "SCP",
          "06/11",
          "06/12",
          "06/13",
          "06/14",
          "06/15",
          "07/00",
          "07/01",
          "07/02",
          "07/03",
          "07/04",
          "07/05",
          "07/06",
          "07/07",
          "07/08",
          "07/09",
          "07/10",
          "07/11",
          "07/12",
          "07/13",
          "07/14",
          "07/15"
        }
      },
      ""
    }
  }
exports.sequences["Independent control functions"] = {
    "subfilters" : {
        "^" : "01/11 " //ESC
      },
    "functions" : {
      "06/00" : "DMI",
      "06/01" : "INT",
      "06/02" : "EMI",
      "06/03" : "RIS",
      "06/04" : "CMD",
      "06/05",
      "06/06",
      "06/07",
      "06/08",
      "06/09",
      "06/10",
      "06/11",
      "06/12",
      "06/13",
      "06/14" : "LS2",
      "06/15" : "LS3",
      "07/00",
      "07/01",
      "07/02",
      "07/03",
      "07/04",
      "07/05",
      "07/06",
      "07/07",
      "07/08",
      "07/09",
      "07/10",
      "07/11",
      "07/12" : "LS3R",
      "07/13" : "LS2R",
      "07/14" : "LS1R",
      "07/15",
    }
  }
exports.sequences["Control strings"] = {
  "subfilters" : [
    { //7-bit (ECMA-6)
      "DCS" : "01/11 05/00",
      "SOS" : "01/11 05/08",
      "ST" : "01/11 05/12",
      "OSC" : "01/11 05/13",
      "PM" : "01/11 05/14",
      "APC" : "01/11 05/15"
    },
    { //8-bit (ECMA-43)
      "DCS" : "09/00",
      "SOS" : "09/08",
      "ST" : "09/12",
      "OSC" : "09/13",
      "PM" : "09/14",
      "APC" : "09/15"
    }
  ],
  "function"
}
exports["names"] = {
  "modes" : {
    "BDSM" : "bi-directional support mode",
    "CRM" : "control representation mode",
    "DCSM" : "device component select mode",
    "ERM" : "erasure mode",
    "FEAM" : "format effector action mode",
    "FETM" : "format effector transfer mode",
    "GATM" : "guarded area transfer mode",
    "GRCM" : "graphic rendition combination mode",
    "HEM" : "character editing mode",
    "IRM" : "insertion replacement mode",
    "KAM" : "keyboard action mode",
    "MATM" : "multiple area transfer mode",
    "PUM" : "positioning unit mode",
    "SATM" : "selected area transfer mode",
    "SRM" : "send/receive mode",
    "SRTM" : "status report transfer mode",
    "TSM" : "tabulation stop mode",
    "TIM" : "transfer termination mode",
    "VEM" : "line editing mode",
    "ZDM" : "zero default mode"
  },
  "functions" : {
    "delimeters" : {
      "APC" : "application program command",
      "CMD" : "coding method delimeter",
      "DCS" : "device control setting",
      "OSC" : "operating system command",
      "PM" : "privacy message",
      "SOS" : "start of string",
      "ST" : "string terminator"
    },
    "introducers" : {
      "CSI" : "control sequence introducer",
      "ESC" : "escape",
      "SC1" : "single character introducer"
    },
    "shift" : {
      "LS0" : "locking-shift 0",
      "LS1" : "locking-shift 1",
      "LS1R" : "locking-shift 1 right",
      "LS2" : "locking-shift 2",
      "LS2R" : "locking-shift 2 right",
      "LS3" : "locking-shift 3",
      "LS3R" : "locking-shift 3 right",
      "SI" : "shift-in",
      "SI" : "shift-out",
      "SS2" : "single-shift 2",
      "SS3" : "single-shift 3"
    },
    "format effectors" : {
      "BS" : "backspace",
      "CR" : "carriage return",
      "FF" : "form feed",
      "HPA" : "character position absolute",
      "HPB" : "character position backward",
      "HPR" : "character position forward",
      "HT" : "character tabulation",
      "HTJ" : "character tabulation with justification",
      "HVP" : "character and line position",
      "LF" : "line feed",
      "NEL" : "next line",
      "PLD" : "partial line forward",
      "PLU" : "partial line backward",
      "PPA" : "page position absolute",
      "PPB" : "page position backward",
      "PPR" : "page position forward",
      "RI" : "reverse line feed",
      "TBC" : "tabulation clear",
      "TSR" : "tabulation stop remove",
      "VPA" : "line position absolute",
      "VPB" : "line position backward",
      "VPR" : "line position forward",
      "VT" : "line tabulation",
      "VTS" : "line tabulation set",
    },
    "presentation control" : {
      "BPH" : "break permitted here",
      "DTA" : "dimension text area",
      "FNT" : "font selection",
      "GCC" : "graphic character combination",
      "GSM" : "graphic size modification",
      "GSS" : "graphic size selection",
      "JFY" : "justify",
      "NBH" : "no break here",
      "PEC" : "presentation expand or contract",
      "PFS" : "page format selection",
      "PTX" : "parallel texts",
      "QUAD" : "quad",
      "SACS" : "set additional character separation",
      "SAPV" : "select alternative presentation variants",
      "SCO" : "set character orientation",
      "SCP" : "set character path",
      "SCS" : "set character spacing",
      "SDS" : "start direct string",
      "SGR" : "select graphic rendition",
      "SHS" : "select character spacing",
      "SIMD" : "select implicit movement direction",
      "SLH" : "set line home",
      "SLL" : "set line limit",
      "SLS" : "set line spacing",
      "SPD" : "select presentation directions",
      "SPH" : "set page home",
      "SPI" : "spacing increment",
      "SPL" : "set page limit",
      "SPQR" : "select print quality and rapidity",
      "SRCS" : "set reduced character separation",
      "SRS" : "start reverse string",
      "SSU" : "select size unit",
      "SSW" : "select space width",
      "STAB" : "selective tabulation",
      "SVS" : "select line spacing",
      "TAC" : "tabulation aligned center",
      "TALE" : "tabulation aligned leading edge",
      "TATE" : "tabulation aligned trailing edge",
      "TCC" : "tabulation centered on character",
      "TSS" : "thin space specification"
    },
    "editor" : {
      "DCH" : "delete character",
      "DL" : "delete line",
      "EA" : "erase in area",
      "ECH" : "erase character",
      "ED" : "erase in page",
      "EF" : "erase in field",
      "EL" : "erase in line",
      "ICH" : "insert character",
      "IL" : "insert line"
    },
    "cursor control" : {
      "CBT" : "cursor backward tabulation",
      "CHA" : "cursor character absolute",
      "CHT" : "cursor forward tabulation",
      "CNL" : "cursor next line",
      "CPL" : "cursor preceding line",
      "CTC" : "cursor tabulation control",
      "CUB" : "cursor left",
      "CUD" : "cursor down",
      "CUF" : "cursor right",
      "CUP" : "cursor position",
      "CUU" : "cursor up",
      "CVT" : "cursor line tabulation"
    },
    "display control" : {
      "NP" : "next page",
      "PP" : "preceding page",
      "SD" : "scroll down",
      "SL" : "scroll left",
      "SR" : "scroll right",
      "SU" : "scroll up"
    },
    "device control" : {
      "DC1" : "device control 1",
      "DC2" : "device control 2",
      "DC3" : "device control 3",
      "DC4" : "device control 4"
    },
    "information separators" : {
      "IS1" : "information separator 1",
      "IS2" : "information separator 2",
      "IS3" : "information separator 3",
      "IS4" : "information separator 4"
    },
    "area definition" : {
      "DAQ" : "define area qualification",
      "EPA" : "end of guarded area",
      "ESA" : "end of selected area",
      "SPA" : "start of guarded area",
      "SSA" : "start of selected aread"
    },
    "mode setting" : {
      "RM" : "reset mode",
      "SM" : "set mode"
    },
    "transmission control" : {
      "ACK" : "acknowledge",
      "DLE" : "data link escape",
      "ENQ" : "enquiry",
      "EOT" : "end of transmission",
      "ETB" : "end of transmission block",
      "ETX" : "end of text",
      "NAK" : "negative acknowledge",
      "SOH" : "start of heading",
      "STX" : "start of text",
      "SYN" : "synchronous idle"
    },
    "miscellaneous control" : {
      "BEL" : "bell",
      "CAN" : "cancel",
      "CCH" : "cancel character",
      "CPR" : "active position report",
      "DA" : "device attributes",
      "DMI" : "disable manual input",
      "DSR" : "device status report",
      "EM" : "end of medium",
      "EMI" : "enable manual input",
      "FNK" : "function key",
      "IDCS" : "identify device control string",
      "IGS" : "identify graphic subrepertoire",
      "INT" : "interrupt",
      "MC" : "media copy",
      "MW" : "message waiting",
      "NUL" : "null",
      "PU1" : "private use 1",
      "PU2" : "private use 2",
      "REP" : "repeat",
      "RIS" : "reset to initial state",
      "SEE" : "select editing extent",
      "STS" : "set transmit state",
      "SUB" : "substitute"
    }
  }
}
