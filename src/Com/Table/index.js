import React from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
import './index.css'

const TableExampleCelledStriped = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'><span className='date-label'>7 November</span></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          Maggie
        </Table.Cell>
        <Table.Cell>10:00 - 19:00</Table.Cell>
        <Table.Cell collapsing textAlign='center'>
            <Label className='pinks'>New !</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          Crystal
        </Table.Cell>
        <Table.Cell>10:00 - 19:00</Table.Cell>
        <Table.Cell collapsing textAlign='center'>
            
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          Angie
        </Table.Cell>
        <Table.Cell>10:00 - 19:00</Table.Cell>
        <Table.Cell collapsing textAlign='center'>
            <Label className='pinks'>New !</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          Haru
        </Table.Cell>
        <Table.Cell>10:00 - 19:00</Table.Cell>
        <Table.Cell collapsing textAlign='center'>
        
        </Table.Cell>
      </Table.Row>
      
    </Table.Body>
  </Table>
)

export default TableExampleCelledStriped