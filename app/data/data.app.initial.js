export const APPDATA_INITIAL = {
  client: '',
  data: {
    general: {
      units: '',
      tenancy: '',
    },
    form: {
      area_gross: '',
      area_net: '',
      floors: '',
      factor_circulation: '',
      factor_planning: '',
    },
    program: {
      total_offices: '',
      total_open_workspaces: '',
      total_meeting_spaces: '',
      total_amenity_spaces: '',
      total_support_spaces: '',
      total_workseats: '',
      ratio: '',
    },
    floors: [
      {
        name: '',
        enclosed_offices: {
          seats: '',
          area: '',
          qty_selected: '',
          seats_total: '',
          area_total: '',
        },
        open_plan_workspaces: {
          seats: '',
          area: '',
          qty_selected: '',
          seats_total: '',
          area_total: '',
        },
        meeting_spaces: {
          seats: '',
          area: '',
          qty_selected: '',
          seats_total: '',
          area_total: '',
        },
        amenity_spaces: {
          seats: '',
          area: '',
          qty_selected: '',
          seats_total: '',
          area_total: '',
        },
        support_spaces: {
          seats: '',
          area: '',
          qty_selected: '',
          seats_total: '',
          area_total: '',
        },
      }
    ]
  },
};
