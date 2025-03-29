import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { ForceDirectedGraph, Link, Node } from './models';

@Injectable({
  providedIn: 'root'
})
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
  * while maintaining the d3 simulations physics
  */

  constructor() { }

    /** A method to bind a pan and zoom behaviour to an svg element */
    applyZoomableBehaviour(svgElement: any, containerElement: any) {
      let svg, container, zoomed, zoom;
  
      svg = d3.select(svgElement);
      container = d3.select(containerElement);
  
      zoomed = (event: { transform: any; }) => {
        const transform = event.transform;
        container.attr("transform", `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
      }
      
      zoom = d3.zoom().on("zoom", zoomed);
      svg.call(zoom);
    }

    /** A method to bind a draggable behaviour to an svg element */

    applyDraggableBehaviour(element: any, node: Node, graph: ForceDirectedGraph) {
      const d3element = d3.select(element);
  
      d3element
        .call(d3.drag()  // Привязка события drag
          .on("start", (event: any) => {
                    /** Preventing propagation of dragstart to parent elements */
                    event.sourceEvent.stopPropagation();
          
                    if (!event.active) {
                      graph.simulation.alphaTarget(0.3).restart();
                    }
          })
          .on("drag", (event: any) => {
                        node.fx = event.x;
                        node.fy = event.y;
                      })
          .on("end", (event: any) => {
                        if (!event.active) {
                          graph.simulation.alphaTarget(0);
                        }
                        node.fx = null;
                        node.fy = null;
                      })
        );
    }

    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    getForceDirectedGraph(nodes: Node[], links: Link[], options: { width: any, height: any} ) {
      let graph = new ForceDirectedGraph(nodes, links, options);
      return graph;
  }
}

