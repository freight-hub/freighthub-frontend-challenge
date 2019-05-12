import React, { Fragment } from 'react'
import { Card } from '@freighthub/components/Card';
import { Text } from '@freighthub/components/Text';
import { Header } from '@freighthub/components/Header';
import { List } from '@freighthub/components/List';
import { Row } from '@freighthub/components/Row';
import { ShipmentInterface } from 'modules/list/shipment.interface';
import { Input } from '@freighthub/components/Input';
import { Button } from '@freighthub/components/Button';

export const Detail: React.FC<{
  item: ShipmentInterface,
  isNameUpdateVisible: boolean,
  onChangeName(e: React.ChangeEvent): void,
  onClickBack(e: React.MouseEvent): void;
  onClickSave(): void;
  onClickCancel(): void;
  onClickUpdate(): void;
}> = (props) =>
  <>
    <Header title={'Your shipments'} onClickBack={props.onClickBack} />
    <List>
      {
        props.isNameUpdateVisible &&
        <>
          <Input value={props.item.name} onChange={props.onChangeName}></Input>
          <Row marginTop>
            <Button primary onClick={props.onClickSave}>Save</Button>
            <Button onClick={props.onClickCancel}>Cancel</Button>
          </Row>
        </>
      }
      {
        !props.isNameUpdateVisible &&
        <>
          <Text uppercase small primary>{props.item.status}</Text>
          <Text big>
            {props.item.name} <Text small bold secondary inline>
            # {props.item.id}
          </Text> - <Text
            primary 
            small 
            inline
            onClick={props.onClickUpdate}
          >Update Name</Text></Text>
        </>
      }
      <Row>
        <Text secondary uppercase small>Delivery</Text>
      </Row>
      <Card marginBottom>
        <Row>
          <Text secondary uppercase marginRight>By</Text><Text>{props.item.mode}</Text>
        </Row>
        <Row>
          <Text secondary uppercase marginRight>From</Text><Text>{props.item.origin}</Text>
        </Row>
        <Row>
          <Text secondary uppercase marginRight>To</Text><Text>{props.item.destination}</Text>
        </Row>
        <Row>
          <Text secondary uppercase marginRight>Shipping type</Text><Text>{props.item.type}</Text>
        </Row>
      </Card>
      <Row>
        <Text secondary uppercase small>Cargo</Text>
      </Row>
      <Card marginBottom>
        {
          props.item.cargo.map(
            (cargoItem, index) =>
            <Fragment key={index}>
              <Row key={cargoItem.description}>
                <Text>{cargoItem.description}</Text>
              </Row>
              <Row small>
                <Text small secondary>Category</Text>
                <Text small>{cargoItem.type}</Text>
              </Row>
              <Row small>
                <Text small secondary>Volume</Text>
                <Text small>{cargoItem.volume}</Text>
              </Row>
            </Fragment>
          )
        }
      </Card>
      <Card>
        {
          props.item.services.map(
            (service) =>
            <Row key={service.type}>
              <Text secondary uppercase marginRight>{service.type}</Text><Text>{service.value || '-'}</Text>
            </Row>
          )
        }
        <Row borderTop>
          <Text primary uppercase marginRight>Total</Text><Text>{props.item.total}</Text>
        </Row>
      </Card>
    </List>
  </>
