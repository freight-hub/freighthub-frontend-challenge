import { Detail } from "./";
import { connect } from "unistore/react";
import { onClickBack } from "../actions/on-click-back";
import { DetailState } from "../state";
import { ShipmentInterface } from "modules/list/shipment.interface";
import { onChangeName } from "../actions/on-change-name";
import { saveName } from "../actions/save-name";
import { toggleNameUpdate } from "../actions/toggle-name-update";
import { resetName } from "../actions/reset-name";
import { compose } from "recompose";

export const DetailContainer = connect<{}, {}, DetailState, {
  item: ShipmentInterface,
  isNameUpdateVisible: boolean,
  onClickBack(e: React.MouseEvent): void,
  onChangeName(e: React.ChangeEvent): void,
  onClickSave(): void,
  onClickCancel(): void,
  onClickUpdate(): void,
}>(
  (state) => ({
    item: state.Detail.shipment,
    isNameUpdateVisible: state.Detail.isNameUpdateVisible,
  }),
  {
    onClickBack,
    onChangeName,
    onClickSave: compose(
      saveName,
      toggleNameUpdate(false)
    ),
    onClickCancel: compose(
      toggleNameUpdate(false),
      resetName,
    ),
    onClickUpdate: toggleNameUpdate(true)
  }
)(Detail)
