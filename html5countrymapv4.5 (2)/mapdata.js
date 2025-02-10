var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    CHAG: {
      name: "Aargau",
      color: "#070606",
      hover_color: "#070606"
    },
    CHAI: {
      name: "Appenzell Innerrhoden",
      color: "#070606",
      hover_color: "#070606"
    },
    CHAR: {
      name: "Appenzell Ausserrhoden",
      color: "#070606",
      hover_color: "#070606"
    },
    CHBE: {
      name: "Bern",
      color: "#070606",
      hover_color: "#070606"
    },
    CHBL: {
      name: "Basel-Landschaft",
      color: "#070606",
      hover_color: "#070606"
    },
    CHBS: {
      name: "Basel-Stadt",
      color: "#070606",
      hover_color: "#070606"
    },
    CHFR: {
      name: "Fribourg",
      color: "#268d45",
      hover_color: "#bdddc7"
    },
    CHGE: {
      name: "Genève",
      color: "#268d45",
      hover_color: "#bdddc7"
    },
    CHGL: {
      name: "Glarus",
      color: "#070606",
      hover_color: "#070606"
    },
    CHGR: {
      name: "Graubünden",
      color: "#070606",
      hover_color: "#070606"
    },
    CHJU: {
      name: "Jura",
      color: "#070606",
      hover_color: "#070606"
    },
    CHLU: {
      name: "Lucerne",
      color: "#070606",
      hover_color: "#070606"
    },
    CHNE: {
      name: "Neuchâtel",
      color: "#268d45",
      hover_color: "#bdddc7"
    },
    CHNW: {
      name: "Nidwalden",
      color: "#070606",
      hover_color: "#070606"
    },
    CHOW: {
      name: "Obwalden",
      color: "#070606",
      hover_color: "#070606"
    },
    CHSG: {
      name: "Sankt Gallen",
      color: "#070606",
      hover_color: "#070606"
    },
    CHSH: {
      name: "Schaffhausen",
      color: "#070606",
      hover_color: "#070606"
    },
    CHSO: {
      name: "Solothurn",
      color: "#070606",
      hover_color: "#070606"
    },
    CHSZ: {
      name: "Schwyz",
      color: "#070606",
      hover_color: "#070606"
    },
    CHTG: {
      name: "Thurgau",
      color: "#070606",
      hover_color: "#070606"
    },
    CHTI: {
      name: "Ticino",
      color: "#070606",
      hover_color: "#070606"
    },
    CHUR: {
      name: "Uri",
      color: "#070606",
      hover_color: "#070606"
    },
    CHVD: {
      name: "Vaud",
      color: "#268d45",
      hover_color: "#bdddc7"
    },
    CHVS: {
      name: "Valais",
      color: "#268d45",
      hover_color: "#bdddc7"
    },
    CHZG: {
      name: "Zug",
      color: "#070606",
      hover_color: "#070606"
    },
    CHZH: {
      name: "Zürich",
      color: "#070606",
      hover_color: "#070606"
    }
  },
  locations: {
    "0": {
      lat: "46.47636136991917",
      lng: "6.409854242327891",
      name: "Finergy SA",
      description: "En Courta Rama 4, 1163 Etoy, Suisse",
      color: "black",
      type: "circle"
    },
    "1": {
      lat: "46.28861247830981",
      lng: "6.1589548999999995",
      description: "Rte de Sauverny 59, 1290 Versoix, Suisse",
      name: "Finergy Versoix",
      color: "black",
      type: "circle"
    }
  },
  labels: {
    CHAG: {
      name: "Aargau",
      parent_id: "CHAG"
    },
    CHAI: {
      name: "Appenzell Innerrhoden",
      parent_id: "CHAI"
    },
    CHAR: {
      name: "Appenzell Ausserrhoden",
      parent_id: "CHAR"
    },
    CHBE: {
      name: "Bern",
      parent_id: "CHBE"
    },
    CHBL: {
      name: "Basel-Landschaft",
      parent_id: "CHBL"
    },
    CHBS: {
      name: "Basel-Stadt",
      parent_id: "CHBS"
    },
    CHFR: {
      name: "Fribourg",
      parent_id: "CHFR"
    },
    CHGE: {
      name: "Genève",
      parent_id: "CHGE"
    },
    CHGL: {
      name: "Glarus",
      parent_id: "CHGL"
    },
    CHGR: {
      name: "Graubünden",
      parent_id: "CHGR"
    },
    CHJU: {
      name: "Jura",
      parent_id: "CHJU"
    },
    CHLU: {
      name: "Lucerne",
      parent_id: "CHLU"
    },
    CHNE: {
      name: "Neuchâtel",
      parent_id: "CHNE"
    },
    CHNW: {
      name: "Nidwalden",
      parent_id: "CHNW"
    },
    CHOW: {
      name: "Obwalden",
      parent_id: "CHOW"
    },
    CHSG: {
      name: "Sankt Gallen",
      parent_id: "CHSG"
    },
    CHSH: {
      name: "Schaffhausen",
      parent_id: "CHSH"
    },
    CHSO: {
      name: "Solothurn",
      parent_id: "CHSO"
    },
    CHSZ: {
      name: "Schwyz",
      parent_id: "CHSZ"
    },
    CHTG: {
      name: "Thurgau",
      parent_id: "CHTG"
    },
    CHTI: {
      name: "Ticino",
      parent_id: "CHTI"
    },
    CHUR: {
      name: "Uri",
      parent_id: "CHUR"
    },
    CHVD: {
      name: "Vaud",
      parent_id: "CHVD"
    },
    CHVS: {
      name: "Valais",
      parent_id: "CHVS"
    },
    CHZG: {
      name: "Zug",
      parent_id: "CHZG"
    },
    CHZH: {
      name: "Zürich",
      parent_id: "CHZH"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};