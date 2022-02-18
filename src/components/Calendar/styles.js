import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerCalendar = styled.div`
  .rbc-calendar {
    background: #fed3d9;
    border-radius: 10px;
  }

  .rbc-toolbar {
    font-family: "Roboto Slab", serif;
    padding: 27px 13px;

    .rbc-toolbar-label {
      text-align: right;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 34px;
      color: ${colors.purple};
    }
  }

  .rbc-month-view {
    font-family: "Roboto Slab", serif;
    border: 0;
  }

  .rbc-header {
    border: 0;
    text-transform: uppercase;
    padding: 10px 0;
  }

  .rbc-date-cell {
    font-size: 20px;
    text-align: left;
    padding-left: 5px;
  }

  .rbc-off-range {
    color: ${colors.grey};
  }

  .rbc-off-range-bg,
  .rbc-day-bg {
    background: ${colors.white};
  }

  .rbc-event {
    background: ${colors.pinkMedium};
    font-size: 10px;
  }
`;
