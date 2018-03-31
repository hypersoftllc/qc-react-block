/* eslint-env jest */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import Block from '../Block'


describe('Block', () => {

  it('should be a function', () => {
    expect(typeof Block).toBe('function')
  })

  it('should be a functional component', () => {
    let comp

    comp = TestRenderer.create(
      <Block/>
    )

    // Functional components don't have instances.
    expect(comp.getInstance()).toBe(null)
  })

  describe('rendered', () => {

    describe('with no props', () => {

      it('should use default props', () => {
        let comp, tree

        comp = TestRenderer.create(
          <Block/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with children', () => {

      it('should render children', () => {
        let comp, tree

        comp = TestRenderer.create(
          <Block>
            <span>Child</span>
          </Block>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with className', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <Block className="Foo"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compClassName', () => {

      it('should render with expected class attribute', () => {
        let comp, tree

        comp = TestRenderer.create(
          <Block compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block className="foo" compClassName=""/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block className="foo" compClassName="block"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

    describe('with compType', () => {

      it('should render with expected component', () => {
        let comp, tree

        comp = TestRenderer.create(
          <Block compType="address"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="aside"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="article"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="footer"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="header"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="main"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="nav"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compType="section"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block className="foo" compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block compClassName="block" compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()

        comp = TestRenderer.create(
          <Block className="foo" compClassName="block" compType="div"/>
        )

        tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
      })

    })

  })

})
